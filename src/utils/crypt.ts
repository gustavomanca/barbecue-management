import { AES, enc } from 'crypto-js'

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY

export function decrypt(text: string): string {
  if (!SECRET_KEY) return ''
  return AES.decrypt(text, SECRET_KEY).toString(enc.Utf8)
}

export function encrypt(text: string): string {
  if (!SECRET_KEY) return ''
  return AES.encrypt(text, SECRET_KEY).toString()
}
