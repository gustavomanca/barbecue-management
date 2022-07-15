import isFuture from 'date-fns/isFuture'
import { dateMask } from './masks'

export function verifyIfIsAFutureDate(value: string): boolean {
  const masked = dateMask(value)
  if (masked.length !== 10) return false
  const isValid = isFuture(new Date(masked.split('/').reverse().join('/')))
  return isValid
}
