import styled, { css } from 'styled-components'

import BrandLogo from 'components/Brand'

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    height: 100vh;
    padding: 0 ${theme.spacings.medium};

    @media (min-width: ${theme.breakpoints.large}) {
      padding: 0;
    }
  `}
`

export const Brand = styled(BrandLogo)`
  ${({ theme }) => css`
    margin: 0 0 ${theme.spacings.medium};
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};

    margin: 0 auto;

    @media (min-width: ${theme.breakpoints.large}) {
      gap: ${theme.spacings.medium};
      width: 40rem;
    }
  `}
`
