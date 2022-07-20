import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} ${theme.spacings.medium};

    @media (min-width: ${theme.breakpoints.large}) {
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    margin: 0 0 ${theme.spacings.large};
  `}
`

export const Grid = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.large};

    @media (min-width: ${theme.breakpoints.large}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`
