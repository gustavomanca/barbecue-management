import { Response } from 'miragejs'
import { encrypt, decrypt } from 'utils/crypt'

function auth(schema, request) {
  const { email, password } = JSON.parse(request.requestBody)
  const user = schema.users.findBy({ email })
  if (!user) {
    return new Response(404, {}, { message: 'User not found' })
  }
  if (password !== decrypt(user.attrs.password)) {
    return new Response(403, {}, { message: 'Invalid password' })
  }
  const token = encrypt(request.requestBody)
  return new Response(201, { Authorization: `Bearer ${token}` })
}

export default function () {
  this.namespace = 'api'

  this.post('auth', auth)

  this.get('users', (schema) => schema.users.all())
}
