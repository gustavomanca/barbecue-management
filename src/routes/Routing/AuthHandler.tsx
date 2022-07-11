import useToken from 'hooks/useToken'
import { Navigate } from 'react-router-dom'

type Props = {
  children: JSX.Element
}

function AuthHandler({ children }: Props) {
  const { token } = useToken()
  return token ? children : <Navigate to="/login" />
}

export default AuthHandler
