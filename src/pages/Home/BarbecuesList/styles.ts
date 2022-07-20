import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.large};
  `}
`
