export default function () {
  this.namespace = 'api'
  this.get('users', (schema) => schema.users.all())
}
