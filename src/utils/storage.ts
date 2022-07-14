import { encrypt } from './crypt'

export function getToken(): string | null {
  const token = localStorage.getItem('BBK:user')
  return token ?? null
}

export function removeToken() {
  localStorage.removeItem('BBK:user')
}

export async function setToken(value: Record<string, any> | string) {
  if (!value) return removeToken()
  const token = encrypt(JSON.stringify(value))
  localStorage.setItem('BBK:user', token)
}
