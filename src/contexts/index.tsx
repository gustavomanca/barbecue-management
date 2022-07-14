import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

// import { LoaderContext } from './Loader'

import theme from 'styles/theme'
import { AuthProvider } from './Auth'

type Props = {
  children: ReactNode
}

function Contexts({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        {/* <LoaderContext> */}
        {children}
        {/* </LoaderContext> */}
      </AuthProvider>
    </ThemeProvider>
  )
}

export default Contexts
