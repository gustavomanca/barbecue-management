export type RouteProps = {
  path: string
  element: () => JSX.Element
  isPrivate?: boolean
}
