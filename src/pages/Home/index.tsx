import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import BarbecuesList from './BarbecuesList'

export function HomePage() {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.CreateBarbecue onClick={() => navigate('/churras/novo')}>
        Criar um churras
      </S.CreateBarbecue>
      <BarbecuesList />
    </S.Container>
  )
}
