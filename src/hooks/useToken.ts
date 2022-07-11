import { useState } from 'react'
import { getToken, storeToken } from 'utils/storage'

function useToken() {
  const [token, setToken] = useState(() => getToken())

  const saveToken = (token: string) => {
    storeToken(token)
    setToken(token)
  }

  return {
    token,
    setToken: saveToken
  }
}

export default useToken
