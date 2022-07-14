import useAuth from 'contexts/Auth'
import * as S from './styles'

function Navbar() {
  const { signOut } = useAuth()

  return (
    <S.Container>
      <S.Title>BBK</S.Title>
      <S.Logout onClick={signOut}>Sair</S.Logout>
    </S.Container>
  )
}

export default Navbar
