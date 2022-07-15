import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'components/Button'
import useApi from 'hooks/useApi'
import { Barbecue } from 'pages/Barbecue/typings'

import * as S from './styles'

export function HomePage() {
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

  return (
    <S.Container>
      <Button onClick={() => navigate('/churras/novo')}>
        Criar um churras
      </Button>

      {Boolean(barbecues.length) &&
        barbecues.map((barbecue) => (
          <span key={barbecue.id}>{barbecue.title}</span>
        ))}
    </S.Container>
  )
}
