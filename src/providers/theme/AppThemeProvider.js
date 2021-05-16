import { useState, useMemo } from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { getTheme } from 'providers/theme'
import { Navbar } from 'components'

const themes = {
  dark: 'dark',
  light: 'light',
}

export const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  const appTheme = useMemo(() => getTheme(theme), [theme])

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Navbar checked={theme === themes.dark} onChange={toggleTheme} />
      {children}
    </ThemeProvider>
  )
}
