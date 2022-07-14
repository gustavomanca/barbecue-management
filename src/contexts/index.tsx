import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'

import { AuthProvider } from './Auth'

type Props = {
  children: ReactNode
}

function Contexts({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}

export default Contexts
