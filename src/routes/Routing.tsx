import { Routes, Route } from 'react-router-dom'
import routes from './routes'

function Routing() {
  return (
    <Routes>
      {routes.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  )
}

export default Routing
