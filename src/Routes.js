import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { Home, About, Resume, Portfolio, Blogs } from 'components/pages'
import { AppThemeProvider } from 'providers/theme'

export const Routes = () => (
  <Router>
    <AppThemeProvider>
      <Container>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
        </Switch>
      </Container>
    </AppThemeProvider>
  </Router>
)
