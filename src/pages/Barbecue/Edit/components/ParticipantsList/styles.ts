import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Title = styled.h1`
  ${({ theme }) => css`
    margin: 0 0 ${theme.spacings.xsmall};
  `}
`

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xsmall};
  `}
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RemoveParticipant = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  height: 4rem;
  width: 4rem;

  background: transparent;
  opacity: 0.5;
  transition: opacity 0.2s ease, transform 0.2s ease;
  will-change: opacity, transform;

  &:hover {
    opacity: 1;
    transform: scale(1.04);
  }
`

export const TrashIcon = styled.img.attrs({
  src: '/assets/images/trash-icon.png'
})`
  ${({ theme }) => css`
    height: ${theme.font.sizes.xlarge};
    width: ${theme.font.sizes.large};
  `}
`
