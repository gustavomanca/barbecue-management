import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type Props = {
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, ...props }: Props) {
  return <S.Container {...props}>{children}</S.Container>
}

export default Button
