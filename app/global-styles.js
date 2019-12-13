import { createGlobalStyle } from 'styled-components'
import { theme } from './theme/theme'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 16px;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: ${theme.colors.bg};
    min-height: 100%;
    min-width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`

export default GlobalStyle
