import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch,
  makeStyles,
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export const Navbar = ({ checked, onChange }) => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="fixed" elevation={1}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Material UI Demo
          </Typography>
          <Switch
            checked={checked}
            onChange={onChange}
            disableRipple={true}
            inputProps={{ 'aria-label': 'theme toggle' }}
          />
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  )
}
