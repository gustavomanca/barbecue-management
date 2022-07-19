import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

import cogoToast from 'cogo-toast'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { Barbecue, Participant } from 'pages/Barbecue/typings'
import { post, put } from 'services/api'

import { verifyIfIsAFutureDate } from 'utils/date'
import { dateMask } from 'utils/masks'
import { getRandomGreetings } from 'utils/messages'
import { generateUUID } from 'utils/uuid'
import { getBarbecueAmount } from 'utils/values'

import AddParticipant from '../AddParticipant'
import * as S from './styles'

type Props = {
  barbecue: Barbecue
  setBarbecue: Dispatch<SetStateAction<Barbecue>>
}

function Form({ barbecue, setBarbecue }: Props) {
  const navigate = useNavigate()

  const [addMode, setAddMode] = useState(false)
  const [error, setError] = useState({
    title: ''
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setError((prev) => ({ ...prev, [name]: '' }))
    setBarbecue((prev) => ({ ...prev, [name]: value }))
  }

  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const masked = dateMask(value)
    setBarbecue((prev) => ({ ...prev, date: masked }))

    const isValidDate = verifyIfIsAFutureDate(value)
    const date = isValidDate ? masked : ''
    setBarbecue((prev) => ({ ...prev, date }))
  }

  const onAddParticipant = (participant: Participant) => {
    const greeting = getRandomGreetings()
    const updated: Participant[] = structuredClone(barbecue.participants)
    Object.assign(participant, { id: generateUUID(), paid: false })
    updated.push(participant)

    setBarbecue((prev) => ({ ...prev, participants: updated }))
    setAddMode(false)

    cogoToast.success(`${greeting}, ${participant.name}`)
  }

  const onSaveBarbecue = async () => {
    if (!barbecue.title)
      return setError((prev) => ({
        ...prev,
        title: 'Informe um título para o churras!'
      }))

    const amount = getBarbecueAmount(barbecue.participants)
    Object.assign(barbecue, { amount })
    const successMessage = `Churras ${barbecue.title} ${
      barbecue.id ? 'atualizado' : 'criado'
    }!`

    try {
      if (barbecue.id) await put(`/barbecues/${barbecue.id}`, barbecue)
      else await post('/barbecues', barbecue)

      cogoToast.success(successMessage)
      navigate('/')
    } catch (error) {
      if (error instanceof AxiosError) {
        cogoToast.error(`${error.message} - Verifique se o servidor está On.`)
      }
    }
  }

  return (
    <S.Form>
      <TextField
        error={error.title}
        placeholder="Informe um título para o seu churras..."
        value={barbecue.title}
        onChange={handleChange}
        name="title"
      />
      <TextField
        placeholder="Informe a data"
        value={barbecue.date}
        onChange={handleDate}
        name="date"
      />
      <AddParticipant
        addMode={addMode}
        setAddMode={setAddMode}
        onAddParticipant={onAddParticipant}
      />
      <S.Actions>
        <S.DarkTextButton onClick={() => navigate(-1)}>Voltar</S.DarkTextButton>
        <Button onClick={onSaveBarbecue}>Salvar</Button>
      </S.Actions>
    </S.Form>
  )
}

export default Form
