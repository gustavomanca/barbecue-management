import { ChangeEvent, FormEvent, useState } from 'react'

import Button from 'components/Button'
import TextField from 'components/TextField'

import useAuth from 'contexts/Auth'

import * as S from './styles'

function LoginPage() {
  const { signIn } = useAuth()

  const [payload, setPayload] = useState({
    email: '',
    password: ''
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setPayload((prev) => ({ ...prev, [name]: value }))
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (!payload.email || !payload.password) return
    signIn(payload)
  }

  return (
    <S.Container>
      <S.Brand />
      <S.Form onSubmit={onSubmit}>
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
        <Button type="submit" disabled={!payload.email || !payload.password}>
          Entrar
        </Button>
      </S.Form>
    </S.Container>
  )
}

export default LoginPage
