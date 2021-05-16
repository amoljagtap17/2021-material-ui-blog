import {
  Home,
  Person,
  Work,
  AssignmentTurnedIn,
  Bookmarks,
} from '@material-ui/icons'

export const menuItems = [
  {
    text: 'Home',
    icon: <Home />,
    path: '/',
  },
  {
    text: 'About Me',
    icon: <Person />,
    path: '/about',
  },
  {
    text: 'Resume',
    icon: <AssignmentTurnedIn />,
    path: '/resume',
  },
  {
    text: 'Portfolio',
    icon: <Work />,
    path: '/portfolio',
  },
  {
    text: 'Blogs',
    icon: <Bookmarks />,
    path: '/blogs',
  },
]
