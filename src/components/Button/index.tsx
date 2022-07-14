import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type Props = {
  className?: string
  variant?: 'primary' | 'text'
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, variant = 'primary', ...props }: Props) {
  return (
    <S.Container variant={variant} {...props}>
      {children}
    </S.Container>
  )
}

export default Button
