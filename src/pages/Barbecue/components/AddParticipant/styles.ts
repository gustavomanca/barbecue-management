import styled, { css } from 'styled-components'
import Button from 'components/Button'

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 0 ${theme.spacings.large};
  `}
`

export const AddModeWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`

export const ParticipantsList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const DarkTextButton = styled(Button).attrs({
  variant: 'text'
})`
  ${({ theme }) => css`
    color: ${theme.colors.blackBean};
  `}
`
