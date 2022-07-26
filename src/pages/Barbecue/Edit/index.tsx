import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { get } from 'services/api'

import Form from '../components/Form'
import ParticipantsList from '../components/ParticipantsList'

import { Barbecue, Participant } from '../typings'
import * as S from '../styles'

export function EditBarbecuePage() {
  const { id } = useParams()

  const [barbecue, setBarbecue] = useState<Barbecue>({
    title: '',
    date: '',
    participants: [],
    amount: 0
  })

  const fetch = useCallback(async () => {
    const data = await get(`/barbecues/${id}`)
    setBarbecue(data)
  }, [id])

  const onUpdateParticipants = (participants: Participant[]) => {
    setBarbecue((prev) => ({ ...prev, participants }))
  }

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <S.Container>
      <S.Title>{barbecue.title}</S.Title>
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
