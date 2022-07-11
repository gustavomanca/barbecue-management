import { AES } from 'crypto-js'

const SECRET_KEY = 'barbecue-management'

export function decrypt(text: string): string {
  return AES.decrypt(text, SECRET_KEY).toString(CryptoJS.enc.Utf8)
}

export function encrypt(text: string): string {
  return AES.encrypt(text, SECRET_KEY).toString()
}
