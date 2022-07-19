import Button from 'components/Button'
import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;
  `}
`

export const CreateBarbecue = styled(Button)`
  ${({ theme }) => css`
    margin: 0 0 ${theme.spacings.large};
  `}
`
