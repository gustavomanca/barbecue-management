import { Routes, Route } from 'react-router-dom'

import AuthHandler from 'routes/Routing/AuthHandler'
import routes from '../routes'

function Routing() {
  return (
    <Routes>
      {routes.map(({ path, element: Component, isPrivate }) => (
        <Route
          key={path}
          path={path}
          element={
            isPrivate ? (
              <AuthHandler>
                <Component />
              </AuthHandler>
            ) : (
              <Component />
            )
          }
        />
      ))}
    </Routes>
  )
}

export default Routing
