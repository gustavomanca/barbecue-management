import { Navigate } from 'react-router-dom'

import useAuth from 'contexts/Auth'

type Props = {
  children: JSX.Element
}

function AuthHandler({ children }: Props) {
  const { accessToken } = useAuth()
  return accessToken ? children : <Navigate to="/login" />
}

export default AuthHandler
