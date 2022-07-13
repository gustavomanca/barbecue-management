import styled, { css } from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;

  height: 100vh;
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};

    margin: 0 auto;
    width: 40rem;
  `}
`
