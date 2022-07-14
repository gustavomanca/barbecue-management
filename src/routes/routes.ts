import { Home, Login } from 'pages'
import { RouteProps } from './typings'

const routes: RouteProps[] = [
  {
    path: '/test',
    element: Home,
    isPrivate: true
  },
  {
    path: '/login',
    element: Login
  }
]

export default routes
