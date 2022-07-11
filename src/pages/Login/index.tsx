import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AxiosError } from 'axios'
import cogoToast from 'cogo-toast'

import useApi from 'hooks/useApi'
import useToken from 'hooks/useToken'

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
        <input
          type="email"
          name="email"
          value={payload.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={payload.password}
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default LoginPage
