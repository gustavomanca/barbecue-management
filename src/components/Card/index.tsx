import { Barbecue } from 'pages/Barbecue/typings'
import * as S from './styles'
import { currencyMask } from 'utils/masks'
import { useNavigate } from 'react-router-dom'

type Props = {
  barbecue: Barbecue
  onDelete: (id: string, title: string) => void
}

function Card({ barbecue, onDelete }: Props) {
  const navigate = useNavigate()

  const { id, amount, date, participants, title } = barbecue

  return (
    <S.Container key={id}>
      <S.Title>{title}</S.Title>
      <S.Text>Data: {date || '-'}</S.Text>
      <S.Text>Participantes: {participants.length}</S.Text>
      <S.Text>Valor arrecadado: R$ {currencyMask(amount)}</S.Text>

      <S.Actions>
        <S.ActionButton
          onClick={() => navigate(`/churras/editar/${id}`)}
          title={`Editar/Visualizar ${title}`}
        >
          <S.PencilIcon />
        </S.ActionButton>
        <S.ActionButton
          onClick={() => onDelete(barbecue?.id ?? '', title)}
          title={`Excluir ${title}`}
        >
          <S.TrashIcon />
        </S.ActionButton>
      </S.Actions>
    </S.Container>
  )
}

export default Card
