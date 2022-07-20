import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import { Props } from '.'

type ContainerProps = {
  variant: Props['variant']
}

const kinds = {
  primary: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.bloodRed};

    &:hover {
      background-color: ${theme.colors.blackBean};
    }
  `,
  darkenText: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.blackBean};

    transition: color 0.3s ease;
    will-change: color;

    &:hover {
      color: ${darken(0.1, theme.colors.blackBean)};
    }
  `,
  text: (theme: DefaultTheme) => css`
    background-color: transparent;
    transition: color 0.3s ease;
    will-change: color;

    &:hover {
      color: ${darken(0.1, theme.colors.white)};
    }
  `
}

const modifiers = {
  disabled: (theme: DefaultTheme) => css`
    &,
    &:hover {
      background-color: ${theme.colors.gray};
      color: ${theme.colors.platinum};
      pointer-events: none;
    }
  `
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, disabled, variant = 'primary' }) => css`
    border: none;

    height: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.small};

    color: ${theme.colors.white};

    cursor: pointer;
    transition: background-color 0.3s ease;
    will-change: background-color;

    ${disabled && modifiers.disabled(theme)}
    ${kinds[variant](theme)};
  `}
`
