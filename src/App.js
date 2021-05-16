import { Typography, Button, Container } from '@material-ui/core'
import { AppThemeProvider } from 'providers/theme'

export const App = () => {
  return (
    <AppThemeProvider>
      <Container>
        <Typography variant="h1" color="textPrimary" align="center">
          Home Page!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disableElevation
        >
          Button
        </Button>
      </Container>
    </AppThemeProvider>
  )
}
