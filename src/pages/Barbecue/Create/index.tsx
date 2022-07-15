import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import cogoToast from 'cogo-toast'
import isFuture from 'date-fns/isFuture'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { getRandomGreetings } from 'utils/messages'

import { Barbecue, Participant } from '../typings'
import AddParticipant from './AddParticipant'
import * as S from './styles'

export const dateMask = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/\d{4}(\d)/, '$1')

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

    if (masked.length === 10) {
      const date = isFuture(new Date(value.split('/').reverse().join('/')))
        ? value
        : ''
      setBarbecue((prev) => ({ ...prev, date }))
    }
  }

  const onAddParticipant = (participant: Participant) => {
    const greeting = getRandomGreetings()
    const updated = [...barbecue.participants]
    updated.push(participant)
    setBarbecue((prev) => ({ ...prev, participants: updated }))
    setAddMode(false)
    cogoToast.success(`${greeting}, ${participant.name}`)
  }

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

          <S.NewParticipantWrapper>
            <S.DarkTextButton onClick={() => setAddMode(true)}>
              + Adicionar participante
            </S.DarkTextButton>
            {addMode && <AddParticipant onAddParticipant={onAddParticipant} />}
          </S.NewParticipantWrapper>

          <S.DarkTextButton onClick={() => navigate(-1)}>
            Voltar
          </S.DarkTextButton>
          <Button>Criar</Button>
        </S.Form>

        <S.ParticipantsList>
          {barbecue.participants.map((participant) => (
            <span key={participant.name}>
              {participant.name} - R$ {participant.value ?? '0,00'}
            </span>
          ))}
        </S.ParticipantsList>
      </S.Grid>
    </S.Container>
  )
}
