import { useCallback, useEffect, useState } from 'react'
import { AxiosError } from 'axios'

import cogoToast from 'cogo-toast'

import { Barbecue } from 'pages/Barbecue/typings'
import { destroy, get } from 'services/api'

import * as S from './styles'
import Card from 'components/Card'

function BarbecuesList() {
  const [barbecues, setBarbecues] = useState<Barbecue[]>([])
  const [isFetching, setIsFetching] = useState(true)

  const fetchBarbecues = useCallback(async () => {
    try {
      const data = await get('/barbecues')
      setBarbecues(data)
    } catch (error) {
      if (error instanceof AxiosError) {
        cogoToast.error(`${error.message} - Verifique se o servidor está On.`)
      }
    } finally {
      setIsFetching(false)
    }
  }, [])

  const onDelete = async (id: string, title: string) => {
    if (!id) return
    await destroy(`/barbecues/${id}`)
    cogoToast.success(`Churras ${title} excluído!`)
    fetchBarbecues()
  }

  useEffect(() => {
    fetchBarbecues()
  }, [fetchBarbecues])

  if (!barbecues?.length && !isFetching)
    return <p>Ainda não há churrascos cadastrados! :(</p>

  return (
    <S.Container>
      {barbecues.map((barbecue) => (
        <Card key={barbecue.id} barbecue={barbecue} onDelete={onDelete} />
      ))}
    </S.Container>
  )
}

export default BarbecuesList
