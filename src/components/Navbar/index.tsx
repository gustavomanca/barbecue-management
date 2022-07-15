import useAuth from 'contexts/Auth'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

function Navbar() {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  return (
    <S.Container>
      <S.Title onClick={() => navigate('/')}>BBK</S.Title>
      <S.Logout onClick={signOut}>Sair</S.Logout>
    </S.Container>
  )
}

export default Navbar
