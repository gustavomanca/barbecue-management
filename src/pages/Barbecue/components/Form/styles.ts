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
    flex-direction: column-reverse;
    gap: ${theme.spacings.xsmall};

    @media (min-width: ${theme.breakpoints.large}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.spacings.large};
    }
  `}
`
