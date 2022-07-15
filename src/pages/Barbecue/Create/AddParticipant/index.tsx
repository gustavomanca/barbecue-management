import { useState } from 'react'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { Participant } from '../../typings'

import * as S from './styles'

type Props = {
  onAddParticipant: (participant: Participant) => void
}

function AddParticipant({ onAddParticipant }: Props) {
  const [newParticipant, setNewParticipant] = useState<Participant | null>(null)

  const handleAddParticipant = () => {
    if (!newParticipant) return
    onAddParticipant(newParticipant)
    setNewParticipant(null)
  }

  return (
    <S.AddModeWrapper>
      <TextField
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
  )
}

export default AddParticipant
