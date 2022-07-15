import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type Props = {
  className?: string
  variant?: 'primary' | 'text'
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({
  children,
  type = 'button',
  variant = 'primary',
  ...props
}: Props) {
  return (
    <S.Container type={type} variant={variant} {...props}>
      {children}
    </S.Container>
  )
}

export default Button
