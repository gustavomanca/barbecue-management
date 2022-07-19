import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    margin: 0 0 ${theme.spacings.large};
  `}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`
