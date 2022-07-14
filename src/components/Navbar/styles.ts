import styled, { css } from 'styled-components'

import Button from 'components/Button'

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.xxlarge};

    background-color: ${theme.colors.bloodRed};
    color: ${theme.colors.white};
  `}
`

export const Title = styled.h1``

export const Logout = styled(Button).attrs({
  variant: 'text'
})``
