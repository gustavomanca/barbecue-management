export function getToken(): string | null {
  const token = localStorage.getItem('token')
  return token ?? null
}

export function removeToken() {
  localStorage.removeItem('token')
}

export function storeToken(value: string) {
  const token = value.replace(/Bearer /, '')
  localStorage.setItem('token', token)
}
