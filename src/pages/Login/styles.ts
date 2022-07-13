import styled, { css } from 'styled-components'

import BrandLogo from 'components/Brand'

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
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
    gap: ${theme.spacings.medium};

    margin: 0 auto;
    width: 40rem;
  `}
`
