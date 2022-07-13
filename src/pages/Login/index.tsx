import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AxiosError } from 'axios'
import cogoToast from 'cogo-toast'

import useApi from 'hooks/useApi'
import useToken from 'hooks/useToken'
import TextField from 'components/TextField'

function LoginPage() {
  const { api } = useApi()
  const navigate = useNavigate()
  const { setToken } = useToken()

  const [payload, setPayload] = useState({
    email: '',
    password: ''
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setPayload((prev) => ({ ...prev, [name]: value }))
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault()

    try {
      const response = await api.post('/auth', payload)
      if ('authorization' in response.headers)
        setToken(response.headers.authorization)

      return navigate('/')
    } catch (error) {
      if (error instanceof AxiosError) {
        cogoToast.error(error?.response?.data.message)
      }
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          type="email"
          name="email"
          placeholder="E-mail"
          value={payload.email}
          onChange={handleChange}
        />
        <TextField
          type="password"
          name="password"
          placeholder="Senha"
          value={payload.password}
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default LoginPage
