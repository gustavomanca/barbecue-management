import styled, { css } from 'styled-components'

import Button from 'components/Button'

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.small};

    background-color: ${theme.colors.bloodRed};
    color: ${theme.colors.white};

    @media (min-width: ${theme.breakpoints.large}) {
      padding: 0 ${theme.spacings.xxlarge};
    }
  `}
`

export const Title = styled.h1``

export const Logout = styled(Button).attrs({
  variant: 'text'
})`
  ${({ theme }) => css`
    position: absolute;
    right: 0;

    @media (min-width: ${theme.breakpoints.large}) {
      position: relative;
    }
  `}
`
