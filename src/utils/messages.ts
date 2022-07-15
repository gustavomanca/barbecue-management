import { GREETINGS } from 'constants/greetings'

export function getRandomGreetings(): string {
  const generateRandom = (max = 1) => {
    const number = Math.floor(Math.random() * max)
    return number
  }
  const randomGreeting = GREETINGS[generateRandom(GREETINGS.length)]
  return randomGreeting
}
