import { encrypt } from 'utils/crypt'

const BYPASS_USER = {
  email: 'gustavo.mancaa@gmail.com',
  password: encrypt('churras')
}

const usersSeeder = (server) => {
  server.create('user', BYPASS_USER)
}

export default function seeds(server) {
  usersSeeder(server)
}
