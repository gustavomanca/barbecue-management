import styled, { css } from 'styled-components'

export const Container = styled.img.attrs({
  src: '/assets/images/brand.png',
  alt: 'Logo com escudo contendo churrasqueira pegando fogo'
})`
  ${({ theme }) => css`
    width: 16rem;

    @media (min-width: ${theme.breakpoints.large}) {
      width: 20rem;
    }
  `}
`
