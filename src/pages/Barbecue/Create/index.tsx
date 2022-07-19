import { useState } from 'react'

import Form from '../components/Form'
import ParticipantsList from '../components/ParticipantsList'

import { Barbecue, Participant } from '../typings'
import * as S from '../styles'

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
