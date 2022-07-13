import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type Props = InputHTMLAttributes<HTMLInputElement>

function TextField(props: Props) {
  return (
    <S.Container>
      <S.Input {...props} />
    </S.Container>
  )
}

export default TextField
