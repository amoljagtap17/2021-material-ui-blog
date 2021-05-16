import { Typography, Container } from '@material-ui/core'
import { AppThemeProvider } from 'providers/theme'
import { GridContainer } from './GridContainer'

export const App = () => {
  return (
    <AppThemeProvider>
      <Container>
        <Typography variant="h1" color="textPrimary" align="center">
          Home Page!
        </Typography>
        {/* <Button
          variant="contained"
          color="primary"
          size="large"
          disableElevation
        >
          Button
        </Button> */}
        <GridContainer />
      </Container>
    </AppThemeProvider>
  )
}
