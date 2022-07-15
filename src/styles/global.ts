import { createGlobalStyle, css } from 'styled-components'

import cogoToastStylesOverride from './cogoToast'

const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: ${theme.colors.platinum};
  }

  ul {
    list-style: none;
  }

  ${cogoToastStylesOverride};
`}
`

export default GlobalStyles
