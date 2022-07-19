export type Barbecue = {
  date: string
  id?: string
  title: string
  participants: Array<Participant>
  amount: number
}

export type Participant = {
  id?: string
  name: string
  value?: string
  paid?: boolean
}
