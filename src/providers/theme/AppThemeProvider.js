import { useState, useMemo } from 'react'
import { ThemeProvider, CssBaseline, Switch } from '@material-ui/core'
import { getTheme } from 'providers/theme'

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
      <Switch
        checked={theme === themes.dark}
        onChange={toggleTheme}
        disableRipple
      />
      {children}
    </ThemeProvider>
  )
}
