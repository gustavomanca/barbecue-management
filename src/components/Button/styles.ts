import styled, { css, DefaultTheme } from 'styled-components'

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

export const Container = styled.button`
  ${({ theme, disabled }) => css`
    border: none;
    border-radius: ${theme.border.radius};

    height: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.small};

    background-color: ${theme.colors.bloodRed};
    color: ${theme.colors.white};

    cursor: pointer;
    transition: background-color 0.3s ease;
    will-change: background-color;

    &:hover {
      background-color: ${theme.colors.blackBean};
    }

    ${disabled && modifiers.disabled(theme)}
  `}
`
