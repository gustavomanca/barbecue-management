function auth(schema, request) {
  const { username } = JSON.parse(request.requestBody)
  const user = schema.users.findBy({ username })
  if (!user) {
    return new Response(404, {}, { message: 'User not found' })
  }
  return new Response(201, { Authorization: `Bearer` })
}

export default function () {
  this.namespace = 'api'

  this.post('auth', auth)

  this.get('users', (schema) => schema.users.all())
}
