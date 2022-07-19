import { Participant } from 'pages/Barbecue/typings'
import { currencyStrToNumber } from './masks'

export const getBarbecueAmount = (participants: Participant[]) =>
  participants.reduce(
    (previous, current) =>
      previous + currencyStrToNumber(current?.value ?? '0,00'),
    0
  )
