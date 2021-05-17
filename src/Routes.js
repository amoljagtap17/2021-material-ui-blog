import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, CircularProgress } from '@material-ui/core'
import { Home, About, Resume } from 'components/pages'
import { AppThemeProvider } from 'providers/theme'

const Portfolio = lazy(() =>
  import(/* webpackPrefetch: true */ 'components/pages/Portfolio')
)
const Blogs = lazy(() =>
  import(/* webpackPrefetch: true */ 'components/pages/Blogs')
)

export const Routes = () => (
  <Router>
    <AppThemeProvider>
      <Container>
        <Suspense fallback={<CircularProgress />}>
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
        </Suspense>
      </Container>
    </AppThemeProvider>
  </Router>
)
