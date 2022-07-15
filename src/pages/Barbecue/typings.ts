export type Barbecue = {
  date: string
  id?: string
  title: string
  participants: Array<Participant>
}

export type Participant = {
  id?: string
  name: string
  value?: string
  paid?: boolean
}
