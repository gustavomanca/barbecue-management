import { useEffect, useRef, useState } from 'react'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { Participant } from '../../typings'

import * as S from './styles'

type Props = {
  addMode: boolean
  setAddMode: (status: boolean) => void
  onAddParticipant: (participant: Participant) => void
}

function AddParticipant({ addMode, setAddMode, onAddParticipant }: Props) {
  const [newParticipant, setNewParticipant] = useState<Participant | null>(null)

  const nameRef = useRef<HTMLInputElement>(null)

  const handleAddParticipant = () => {
    if (!newParticipant) return
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
            placeholder="Nome"
            value={newParticipant?.name ?? ''}
            onChange={({ target }) =>
              setNewParticipant((prev) => ({
                ...prev,
                name: target.value
              }))
            }
          />
          <TextField
            placeholder="Valor"
            value={newParticipant?.value ?? ''}
            onChange={({ target }) =>
              setNewParticipant((prev) => ({
                ...prev,
                value: target.value
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
