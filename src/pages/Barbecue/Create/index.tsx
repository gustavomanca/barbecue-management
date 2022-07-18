import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import cogoToast from 'cogo-toast'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { verifyIfIsAFutureDate } from 'utils/date'
import { dateMask } from 'utils/masks'
import { getRandomGreetings } from 'utils/messages'
import { generateUUID } from 'utils/uuid'

import { Barbecue, Participant } from '../typings'

import AddParticipant from './components/AddParticipant'
import ParticipantsList from './components/ParticipantsList'
import * as S from './styles'

export function CreateBarbecuePage() {
  const navigate = useNavigate()
  const [addMode, setAddMode] = useState(false)
  const [barbecue, setBarbecue] = useState<Barbecue>({
    title: '',
    date: '',
    participants: []
  })
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
    const updated = [...barbecue.participants]
    Object.assign(participant, { id: generateUUID(), paid: false })
    updated.push(participant)
    setBarbecue((prev) => ({ ...prev, participants: updated }))
    setAddMode(false)
    cogoToast.success(`${greeting}, ${participant.name}`)
  }

  const onCreateBarbecue = () => {
    if (!barbecue.title)
      return setError((prev) => ({
        ...prev,
        title: 'Informe um título para o churras!'
      }))
  }

  const onUpdateParticipants = (participants: Participant[]) => {
    setBarbecue((prev) => ({ ...prev, participants }))
  }

  return (
    <S.Container>
      <S.Title>Novo Churras</S.Title>

      <S.Grid>
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
            <S.DarkTextButton onClick={() => navigate(-1)}>
              Voltar
            </S.DarkTextButton>
            <Button onClick={onCreateBarbecue}>Criar</Button>
          </S.Actions>
        </S.Form>

        <ParticipantsList
          onUpdateParticipants={onUpdateParticipants}
          participants={barbecue.participants}
        />
      </S.Grid>
    </S.Container>
  )
}
