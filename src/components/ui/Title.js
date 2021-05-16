import { Typography } from '@material-ui/core'

export const Title = ({ titleText }) => (
  <Typography variant="h1" color="textPrimary" align="center" gutterBottom>
    {titleText}
  </Typography>
)
