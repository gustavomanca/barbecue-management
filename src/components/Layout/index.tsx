import { ReactNode } from 'react'

import Navbar from 'components/Navbar'
import useAuth from 'contexts/Auth'

import * as S from './styles'

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  const { accessToken } = useAuth()

  return (
    <S.Container>
      {accessToken && <Navbar />}
      <S.Children>{children}</S.Children>
    </S.Container>
  )
}

export default Layout
