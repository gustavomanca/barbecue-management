import { lazy } from 'react'
import { RouteProps } from './typings'

const Home = lazy(() =>
  import('pages/Home').then(({ HomePage }) => ({
    default: HomePage
  }))
)

const Login = lazy(() =>
  import('pages/Login').then(({ LoginPage }) => ({
    default: LoginPage
  }))
)

const CreateBarbecue = lazy(() =>
  import('pages/Barbecue/Create').then(({ CreateBarbecuePage }) => ({
    default: CreateBarbecuePage
  }))
)

const EditBarbecue = lazy(() =>
  import('pages/Barbecue/Edit').then(({ EditBarbecuePage }) => ({
    default: EditBarbecuePage
  }))
)

const routes: RouteProps[] = [
  {
    path: '/',
    element: Home,
    isPrivate: true
  },
  {
    path: '/login',
    element: Login
  },
  {
    path: '/churras/novo',
    element: CreateBarbecue,
    isPrivate: true
  },
  {
    path: '/churras/editar/:id',
    element: EditBarbecue,
    isPrivate: true
  }
]

export default routes
