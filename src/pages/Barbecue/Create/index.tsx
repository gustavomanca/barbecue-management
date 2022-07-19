import { useState } from 'react'

import { Barbecue, Participant } from '../typings'

import ParticipantsList from '../components/ParticipantsList'
import * as S from './styles'
import Form from '../components/Form'

export function CreateBarbecuePage() {
  const [barbecue, setBarbecue] = useState<Barbecue>({
    title: '',
    date: '',
    participants: [],
    amount: 0
  })

  const onUpdateParticipants = (participants: Participant[]) => {
    setBarbecue((prev) => ({ ...prev, participants }))
  }

  return (
    <S.Container>
      <S.Title>Novo Churras</S.Title>

      <S.Grid>
        <Form barbecue={barbecue} setBarbecue={setBarbecue} />

        <ParticipantsList
          onUpdateParticipants={onUpdateParticipants}
          participants={barbecue.participants}
        />
      </S.Grid>
    </S.Container>
  )
}
