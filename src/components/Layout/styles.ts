import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Children = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};

    @media (min-width: ${theme.breakpoints.large}) {
      margin: 0 auto;
      width: ${theme.breakpoints.large};
    }
  `}
`
