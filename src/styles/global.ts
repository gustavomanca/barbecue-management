import { createGlobalStyle, css } from 'styled-components'

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

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`}
`

export default GlobalStyles
