import { forwardRef, InputHTMLAttributes } from 'react'
import * as S from './styles'

type Props = InputHTMLAttributes<HTMLInputElement>

const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <S.Container>
    <S.Input ref={ref} {...props} />
  </S.Container>
))

TextField.displayName = 'TextField'

export default TextField
