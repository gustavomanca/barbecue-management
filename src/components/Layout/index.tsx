import Loader from 'components/Loader'
import useLoader from 'hooks/useLoader'
import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  const { loading } = useLoader()

  return (
    <S.Container>
      {loading && <Loader />}

      <S.Children>{children}</S.Children>
    </S.Container>
  )
}

export default Layout
