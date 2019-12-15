import { createMuiTheme } from '@material-ui/core/styles'

export const theme = {
  colors: {
    baseColor: '#008eb3',
    white: '#ffffff',
    text: '#555555',
    bg: '#f4f6f9',
  },
  fontSizes: {
    baseFontSize: '16px',
    titleSize: '20px',
  },
}

export const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.colors.baseColor,
    },
  },
})
