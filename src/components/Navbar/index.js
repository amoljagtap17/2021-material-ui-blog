import { useState } from 'react'
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
import {
  Menu,
  Home,
  Person,
  Work,
  AssignmentTurnedIn,
  Bookmarks,
  Brightness5,
  Brightness2,
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
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
}))

export const Navbar = ({ checked, onChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const classes = useStyles()

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
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="About Me" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentTurnedIn />
            </ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Work />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Bookmarks />
            </ListItemIcon>
            <ListItemText primary="Blogs" />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
