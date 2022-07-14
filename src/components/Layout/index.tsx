import { ReactNode } from 'react'

import Loader from 'components/Loader'
import Navbar from 'components/Navbar'

import useAuth from 'contexts/Auth'

import * as S from './styles'

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  const { accessToken, loading } = useAuth()

  return (
    <S.Container>
      {loading && <Loader />}
      {accessToken && <Navbar />}
      <S.Children>{children}</S.Children>
    </S.Container>
  )
}

export default Layout
