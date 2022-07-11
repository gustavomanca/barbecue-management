import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <S.Container>
      <S.Children>{children}</S.Children>
    </S.Container>
  )
}

export default Layout
