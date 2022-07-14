import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'content-type': 'application/json'
  }
})

type PayloadProps = {
  email: string
  password: string
}

export async function fakeRequest(
  values?: Record<string, any>,
  time?: 3000
): Promise<Record<string, any>> {
  await new Promise((resolve) => setTimeout(resolve, time))
  return { status: 200, data: values }
}

function useApi() {
  async function signIn(payload: PayloadProps) {
    await fakeRequest(payload)
  }

  return { api, signIn }
}

export default useApi
