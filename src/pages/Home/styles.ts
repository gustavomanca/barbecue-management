import Button from 'components/Button'
import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    padding: 3.2rem 2.4rem;

    @media (min-width: ${theme.breakpoints.large}) {
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`

export const CreateBarbecue = styled(Button)`
  ${({ theme }) => css`
    align-self: flex-end;
    margin: 0 0 ${theme.spacings.large};
  `}
`
