import { forwardRef, InputHTMLAttributes } from 'react'
import * as S from './styles'

export type Props = {
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <S.Container>
    <S.Input ref={ref} {...props} />
    {Boolean(props.error) && <S.Error>{props.error}</S.Error>}
  </S.Container>
))

TextField.displayName = 'TextField'

export default TextField
