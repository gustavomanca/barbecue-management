import styled, { css } from 'styled-components'

import Button from 'components/Button'

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: ${theme.spacings.xsmall};
  `}
`

export const DarkTextButton = styled(Button).attrs({
  variant: 'darkenText'
})`
  ${({ theme }) => css`
    color: ${theme.colors.blackBean};
  `}
`

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
  `}
`
