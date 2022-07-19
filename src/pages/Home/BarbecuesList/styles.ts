import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.large};
  `}
`

export const Card = styled.section.attrs({
  title: 'Clique para editar/visualizar'
})`
  ${({ theme }) => css`
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
