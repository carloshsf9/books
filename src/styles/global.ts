import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    min-height: 100%;
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  
  input,
  textarea,
  button,
  select,
  img,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`

export default GlobalStyles
