import styled, { css } from 'styled-components'

export const Container = styled.section.attrs({
  title: 'Clique para editar/visualizar'
})`
  ${({ theme }) => css`
    position: relative;

    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.medium};

    background-color: ${theme.colors.white};
    transition: transform 0.3s ease;
    will-change: transform;

    cursor: pointer;

    &:hover {
      transform: scale(1.01);
    }
  `}
`

export const Title = styled.h1``

export const Text = styled.p``

export const Actions = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: ${theme.spacings.xxsmall};
    top: ${theme.spacings.xxsmall};

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    background-color: transparent;
  `}
`

export const ActionButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    height: ${theme.spacings.large};
    width: ${theme.spacings.large};

    background-color: transparent;
  `}
`

export const PencilIcon = styled.img.attrs({
  src: '/assets/images/pencil-icon.png'
})`
  ${({ theme }) => css`
    height: ${theme.spacings.small};
    width: ${theme.spacings.small};

    opacity: 0.5;
    transition: opacity 0.3s ease-out;
    will-change: opacity;

    &:hover {
      opacity: 1;
    }
  `}
`

export const TrashIcon = styled.img.attrs({
  src: '/assets/images/trash-icon.png'
})`
  ${({ theme }) => css`
    height: ${theme.font.sizes.xlarge};
    width: ${theme.font.sizes.large};

    opacity: 0.5;
    transition: opacity 0.3s ease-out;
    will-change: opacity;

    &:hover {
      opacity: 1;
    }
  `}
`
