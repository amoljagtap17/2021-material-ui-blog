import { createMuiTheme } from '@material-ui/core'

export const getTheme = (theme) =>
  createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#007bff',
      },
      secondary: {
        main: '#6c757d',
      },
      text: {
        primary: theme === 'dark' ? '#dcdcdc' : '#2b2c38',
        secondary: theme === 'dark' ? '#AEB0B4' : '#718096',
      },
      background: {
        default: theme === 'dark' ? '#2b2c38' : '#f4f7f9',
      },
    },
    typography: {
      fontFamily: "'Lato', sans-serif",
      htmlFontSize: 10,
      fontSize: 10,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      h1: {
        fontFamily: "'Caveat', cursive",
        fontWeight: 700,
        fontSize: '6rem',
      },
      h2: {
        fontFamily: "'Caveat', cursive",
        fontWeight: 700,
        fontSize: '5rem',
      },
      body1: {
        fontSize: '1.125rem',
      },
    },
    overrides: {
      MuiCard: {
        root: {
          backgroundColor: theme === 'dark' ? '#1A202C' : '#fff',
        },
      },
      MuiAppBar: {
        colorPrimary: {
          color: theme === 'dark' ? '#dcdcdc' : '#2b2c38',
          backgroundColor: theme === 'dark' ? '#2b2c38' : '#f4f7f9',
        },
      },
      MuiDrawer: {
        paper: {
          color: theme === 'dark' ? '#dcdcdc' : '#2b2c38',
          backgroundColor: theme === 'dark' ? '#2b2c38' : '#f4f7f9',
        },
      },
      MuiListItemIcon: {
        root: {
          color: theme === 'dark' ? '#dcdcdc' : '#2b2c38',
        },
      },
    },
  })
