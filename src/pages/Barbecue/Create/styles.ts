import styled, { css } from 'styled-components'

import Button from 'components/Button'

export const Container = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    margin: 0 0 ${theme.spacings.large};
  `}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: ${theme.spacings.xsmall};
  `}
`

export const DarkTextButton = styled(Button).attrs({
  variant: 'text'
})`
  ${({ theme }) => css`
    color: ${theme.colors.blackBean};
  `}
`

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
  `}
`

export const ParticipantsList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Item = styled.li``
