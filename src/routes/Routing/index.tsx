import { Routes, Route } from 'react-router-dom'

import NotFoundPage from 'pages/NotFound'

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
            !isPrivate ? (
              <Component />
            ) : (
              <AuthHandler>
                <Component />
              </AuthHandler>
            )
          }
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Routing
