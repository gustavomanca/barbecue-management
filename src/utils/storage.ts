export function getToken(): string | null {
  const token = localStorage.getItem('BBK@User')
  return token ?? null
}

export function removeToken() {
  localStorage.removeItem('BBK@User')
}

export function storeToken(value: string) {
  const token = value.replace(/Bearer /, '')
  localStorage.setItem('BBK@User', token)
}
