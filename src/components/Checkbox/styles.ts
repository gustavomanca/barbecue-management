import styled, { css, DefaultTheme } from 'styled-components'

type InfoProps = {
  lineThrough?: boolean
}

const modifiers = {
  lineThrough: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};

    &::after {
      width: 100%;
    }
  `
}

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    position: relative;

    border: 1px solid ${theme.colors.gray};
    border-radius: 50%;
    outline: 0;

    height: ${theme.spacings.small};
    width: ${theme.spacings.small};

    appearance: none;
    cursor: pointer;

    transition: background-color 0.3s cubic-bezier(0.1, 0.1, 0.25, 1),
      border-width 0.2s ease-out, transform 0.3s ease;
    will-change: background-color, border-width, transform;

    &::before {
      content: '';
      position: absolute;
      left: 7px;
      top: 3px;

      display: block;

      border-style: solid;
      border-color: ${theme.colors.white};
      border-radius: 1px;
      border-width: 0 2px 2px 0;

      height: 11px;
      width: 6px;

      opacity: 0;
      transform: rotate(45deg);
      transition: left 0.2s ease, top 0.2s ease;
      will-change: left, top;
    }

    &:checked {
      border-color: ${theme.colors.sinopia};
      background-color: ${theme.colors.sinopia};

      &::before {
        opacity: 1;
      }
    }

    &:hover {
      border-width: 2px;
      transform: scale(1.1);

      &::before {
        top: 2px;
        left: 6px;
      }
    }
  `}
`

export const Label = styled.label<InfoProps>`
  ${({ theme, lineThrough }) => css`
    position: relative;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;

      height: 1px;
      width: 0;

      background-color: ${theme.colors.black};

      transition: color 0.3s ease,
        width 0.2s cubic-bezier(0.6, -0.28, 0.74, 0.05);
      will-change: color, width;
    }

    ${lineThrough && modifiers.lineThrough(theme)};
  `}
`
