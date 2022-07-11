import { ChangeEvent, FormEvent, useState } from 'react'

import { api } from 'services/api'

function LoginPage() {
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
      console.log({ response })
    } catch (error) {
      console.log({ error })
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
