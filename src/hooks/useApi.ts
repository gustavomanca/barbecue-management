import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'content-type': 'application/json'
  }
})

function useApi() {
  return { api }
}

export default useApi