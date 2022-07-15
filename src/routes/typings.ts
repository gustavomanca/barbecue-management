import { LazyExoticComponent } from 'react'

export type RouteProps = {
  path: string
  element: LazyExoticComponent<any>
  isPrivate?: boolean
}
