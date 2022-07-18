import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { Props } from '.'

const modifiers = {
  error: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.bloodRed};
  `
}

export const Container = styled.div`
  height: 6.4rem;
`

export const Input = styled.input<Props>`
  ${({ theme, error }) => css`
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};

    padding: 0 ${theme.spacings.xsmall};
    height: ${theme.spacings.xlarge};
    width: 100%;

    &:focus {
      outline: 1px solid ${darken(0.1, theme.colors.gray)};
    }

    ${error && modifiers.error(theme)}
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    margin: 0 0 0 ${theme.font.sizes.xsmall};

    color: ${theme.colors.bloodRed};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
