import { useEffect, useRef, useState } from 'react'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { Participant } from 'pages/Barbecue/typings'

import * as S from './styles'
import { currencyMask } from 'utils/masks'

type Props = {
  addMode: boolean
  setAddMode: (status: boolean) => void
  onAddParticipant: (participant: Participant) => void
}

function AddParticipant({ addMode, setAddMode, onAddParticipant }: Props) {
  const [newParticipant, setNewParticipant] = useState<Participant | null>(null)
  const [error, setError] = useState({
    name: ''
  })

  const nameRef = useRef<HTMLInputElement>(null)

  const handleAddParticipant = () => {
    if (!newParticipant?.name)
      return setError((prev) => ({
        ...prev,
        name: 'Informe o nome do participante!'
      }))

    onAddParticipant(newParticipant)
    setNewParticipant(null)
  }

  useEffect(() => {
    if (addMode) nameRef?.current?.focus()
  }, [addMode])

  return (
    <S.Container>
      <S.DarkTextButton onClick={() => setAddMode(true)}>
        + Adicionar participante
      </S.DarkTextButton>
      {addMode && (
        <S.AddModeWrapper>
          <TextField
            ref={nameRef}
            error={error.name}
            placeholder="Nome"
            value={newParticipant?.name ?? ''}
            onChange={({ target }) => {
              setError((prev) => ({ ...prev, name: '' }))
              setNewParticipant((prev) => ({
                ...prev,
                name: target.value
              }))
            }}
          />
          <TextField
            placeholder="Valor (R$)"
            value={newParticipant?.value ?? ''}
            onChange={({ target }) =>
              setNewParticipant((prev) => ({
                ...prev,
                value: currencyMask(target.value)
              }))
            }
          />
          <Button type="button" onClick={handleAddParticipant}>
            Adicionar
          </Button>
        </S.AddModeWrapper>
      )}
    </S.Container>
  )
}

export default AddParticipant
