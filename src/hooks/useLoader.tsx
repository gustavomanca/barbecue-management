import { useState } from 'react'
import { delay } from 'utils/delay'
import useApi from './useApi'

function useLoader() {
  const { api } = useApi()
  const [loading, setLoading] = useState(false)

  api.interceptors.request.use(
    (config) => {
      setLoading(true)
      return config
    },
    (error) => {
      setLoading(false)
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    async (response) => {
      setLoading(false)

      if (process.env.NODE_ENV === 'development') await delay()
      return response
    },
    (error) => {
      setLoading(false)
      return Promise.reject(error)
    }
  )

  return { loading }
}

export default useLoader
