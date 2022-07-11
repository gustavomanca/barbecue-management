import { createServer } from 'miragejs'

import models from './models'
import seeds from './seeds'
import routes from './routes'

export default function () {
  createServer({
    models,
    routes,
    seeds
  })
}
