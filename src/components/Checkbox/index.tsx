import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type Props = {
  label?: string
  lineThrough?: boolean
} & InputHTMLAttributes<HTMLInputElement>

function Checkbox({ label, lineThrough, ...props }: Props) {
  return (
    <S.Container>
      <S.Input type="checkbox" {...props} />
      {label && (
        <S.Label lineThrough={lineThrough} htmlFor={props.id}>
          {label}
        </S.Label>
      )}
    </S.Container>
  )
}

export default Checkbox
