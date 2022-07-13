import * as S from './styles'

type Props = {
  className?: string
}

function Brand({ className }: Props) {
  return <S.Container className={className} />
}

export default Brand
