import { css } from 'styled-components'

export default css`
  ${({ theme }) => css`
    .ct-toast-success {
      border-left: 3px solid ${theme.colors.blazeOrange} !important;

      svg path {
        fill: ${theme.colors.sinopia};
      }
    }
  `}
`
