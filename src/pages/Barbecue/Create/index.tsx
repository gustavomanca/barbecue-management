import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import cogoToast from 'cogo-toast'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { verifyIfIsAFutureDate } from 'utils/date'
import { dateMask } from 'utils/masks'
import { getRandomGreetings } from 'utils/messages'
import { generateUUID } from 'utils/uuid'

import { Barbecue, Participant } from '../typings'
import AddParticipant from './AddParticipant'
import * as S from './styles'
import Checkbox from 'components/Checkbox'

export function CreateBarbecuePage() {
  const navigate = useNavigate()
  const [addMode, setAddMode] = useState(false)
  const [barbecue, setBarbecue] = useState<Barbecue>({
    title: '',
    date: '',
    participants: []
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
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

  const onCheckParticipant = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = event.target
    const updated = [...barbecue.participants]
    const foundIndex = barbecue.participants.findIndex(
      (participant) => participant.id === id
    )
    updated.splice(foundIndex, 1, {
      ...barbecue.participants[foundIndex],
      paid: checked
    })
    setBarbecue((prev) => ({ ...prev, participants: updated }))
  }

  useEffect(() => {
    console.log({ participants: barbecue.participants })
  }, [barbecue])

  return (
    <S.Container>
      <S.Title>Novo Churras</S.Title>

      <S.Grid>
        <S.Form>
          <TextField
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
            <Button>Criar</Button>
          </S.Actions>
        </S.Form>

        <S.ParticipantsList>
          {barbecue.participants.map((participant) => (
            <S.Item key={participant.name}>
              <Checkbox
                name={participant.id}
                id={participant.id}
                onChange={onCheckParticipant}
                label={`${participant.name} - R$ ${
                  participant.value ?? '0,00'
                }`}
                lineThrough={participant.paid}
              />
            </S.Item>
          ))}
        </S.ParticipantsList>
      </S.Grid>
    </S.Container>
  )
}
