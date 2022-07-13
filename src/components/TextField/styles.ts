import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  ${({ theme }) => css`
    height: ${theme.spacings.xlarge};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};

    padding: 0 ${theme.spacings.xsmall};
    height: 100%;
    width: 100%;

    font-size: ${theme.font.sizes.medium};

    &:focus {
      outline: 1px solid ${darken(0.1, theme.colors.gray)};
    }
  `}
`
