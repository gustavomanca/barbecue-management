import { ChangeEvent } from 'react'
import { Participant } from 'pages/Barbecue/typings'
import Checkbox from 'components/Checkbox'

type Props = {
  onUpdateParticipants: (participants: Participant[]) => void
  participants: Participant[]
}

import * as S from './styles'

function ParticipantsList({ onUpdateParticipants, participants }: Props) {
  const onCheckParticipant = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = event.target
    const updated = [...participants]
    const foundIndex = participants.findIndex(
      (participant) => participant.id === id
    )
    updated.splice(foundIndex, 1, {
      ...participants[foundIndex],
      paid: checked
    })
    onUpdateParticipants(updated)
  }

  const onDeleteParticipant = (id: string) => {
    if (!id) return
    const updated = [...participants]
    const foundIndex = participants.findIndex(
      (participant) => participant.id === id
    )
    updated.splice(foundIndex, 1)
    onUpdateParticipants(updated)
  }

  if (!participants?.length)
    return <S.Title as="p">Ainda não há participantes na lista!</S.Title>

  return (
    <S.Container>
      <S.Title>Participantes</S.Title>
      <S.List>
        {participants.map((participant) => (
          <S.Item key={participant.id}>
            <Checkbox
              name={participant.id}
              id={participant.id}
              onChange={onCheckParticipant}
              checked={participant.paid}
              label={`${participant.name} - R$ ${participant.value ?? '0,00'}`}
              lineThrough={participant.paid}
            />
            <S.RemoveParticipant
              onClick={() => onDeleteParticipant(participant?.id ?? '')}
            >
              <S.TrashIcon />
            </S.RemoveParticipant>
          </S.Item>
        ))}
      </S.List>
    </S.Container>
  )
}

export default ParticipantsList
