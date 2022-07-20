import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from 'services/api'

import { encrypt } from 'utils/crypt'
import { delay } from 'utils/delay'
import { getToken, setToken } from 'utils/storage'

type AuthContextProps = {
  accessToken: string
  loading: boolean
  signIn: (credentials: CredentialsProps) => void
  signOut: () => void
}

type CredentialsProps = {
  email: string
  password: string
}

type Props = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
)

export function AuthProvider({ children }: Props) {
  const navigate = useNavigate()

  const [loading, setLoading] = useState<boolean>(false)
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true)

  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    const token = getToken()
    token && setAccessToken(token)
    setLoadingInitial(false)
  }, [])

  useEffect(() => {
    api.interceptors.request.use(
      async (config) => {
        setLoading(true)
        await delay()
        return config
      },
      (error) => {
        setLoading(false)
        return Promise.reject(error)
      }
    )
    api.interceptors.response.use(
      (response) => {
        setLoading(false)
        return Promise.resolve(response)
      },
      (error) => {
        setLoading(false)
        return Promise.reject(error)
      }
    )
  }, [])

  useEffect(() => {
    setToken(accessToken)
  }, [accessToken])

  async function signIn(credentials: CredentialsProps) {
    setLoading(true)
    await delay()
    const encrypted = encrypt(JSON.stringify(credentials))
    setAccessToken(encrypted)
    setLoading(false)
    navigate('/')
  }

  function signOut() {
    setAccessToken('')
    navigate('/login')
  }

  const providerValues = useMemo(
    () => ({
      accessToken,
      loading,
      signIn,
      signOut
    }),
    [accessToken, loading] //eslint-disable-line
  )

  return (
    <AuthContext.Provider value={providerValues}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}
