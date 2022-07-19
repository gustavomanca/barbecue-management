import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

import cogoToast from 'cogo-toast'

import { Barbecue } from 'pages/Barbecue/typings'
import { destroy, get } from 'services/api'
import { currencyMask } from 'utils/masks'

import * as S from './styles'

function BarbecuesList() {
  const navigate = useNavigate()

  const [barbecues, setBarbecues] = useState<Barbecue[]>([])

  const fetchBarbecues = useCallback(async () => {
    try {
      const data = await get('/barbecues')
      setBarbecues(data)
    } catch (error) {
      if (error instanceof AxiosError) {
        cogoToast.error(`${error.message} - Verifique se o servidor está On.`)
      }
    }
  }, [])

  const onDelete = async (id: string, title: string) => {
    if (!id) return
    await destroy(`/barbecues/${id}`)
    cogoToast.success(`Churras ${title} excluído!`)
  }

  useEffect(() => {
    fetchBarbecues()
  }, [fetchBarbecues])

  if (!barbecues?.length) return <p>Ainda não há churrascos cadastrados! :(</p>

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

          <S.Delete
            onClick={() => onDelete(barbecue?.id ?? '', barbecue.title)}
          >
            <S.TrashIcon />
          </S.Delete>
        </S.Card>
      ))}
    </S.Container>
  )
}

export default BarbecuesList
