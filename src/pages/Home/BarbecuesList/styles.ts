import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};

    @media (min-width: ${theme.breakpoints.large}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.spacings.large};
    }
  `}
`
