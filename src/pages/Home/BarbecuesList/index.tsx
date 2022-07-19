import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useApi from 'hooks/useApi'
import { Barbecue } from 'pages/Barbecue/typings'
import { currencyMask } from 'utils/masks'

import * as S from './styles'

function BarbecuesList() {
  const { api } = useApi()
  const navigate = useNavigate()

  const [barbecues, setBarbecues] = useState<Barbecue[]>([])

  const fetchBarbecues = useCallback(async () => {
    const { data } = await api.get('/barbecues')
    setBarbecues(data)
  }, [api])

  useEffect(() => {
    fetchBarbecues()
  }, [fetchBarbecues])

  if (!barbecues.length) return <p>Ainda não há churrascos cadastrados! :(</p>

  return (
    <S.Container>
      {barbecues.map((barbecue) => (
        <S.Card
          key={barbecue.id}
          onClick={() => navigate(`/churras/editar/${barbecue.id}`)}
        >
          <S.Title>{barbecue.title}</S.Title>
          <S.Text>Data: {barbecue.date || '-'}</S.Text>
          <S.Text>Participantes: {barbecue.participants.length}</S.Text>
          <S.Text>Valor arrecadado: R$ {currencyMask(barbecue.amount)}</S.Text>
        </S.Card>
      ))}
    </S.Container>
  )
}

export default BarbecuesList
