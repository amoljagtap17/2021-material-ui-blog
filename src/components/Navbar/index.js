import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch,
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core'
import { Menu, Brightness5, Brightness2 } from '@material-ui/icons'
import { menuItems } from './menuItems'

const useStyles = makeStyles((theme) => {
  return {
    offset: theme.mixins.toolbar,
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: 240,
    },
    drawerPaper: {
      width: 240,
    },
    active: {
      background:
        theme.palette.type === 'dark'
          ? theme.palette.grey[600]
          : theme.palette.grey[400],
    },
  }
})

export const Navbar = ({ checked, onChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const toggleDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setDrawerOpen((prevDrawerOpen) => !prevDrawerOpen)
  }

  return (
    <>
      <AppBar position="fixed" elevation={1}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
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
          {checked ? <Brightness2 /> : <Brightness5 />}
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              onClick={(evt) => {
                toggleDrawer(evt)
                history.push(item.path)
              }}
              key={item.text}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
