import {
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles((data) => {
  console.log('data : ', data)
  return {
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    cardContent: {
      flex: '1 1 auto',
    },
    media: {
      height: 250,
      objectFit: 'cover',
      borderRadius: '0px 0px 140px 0px',
    },
  }
})

export const GridItem = ({ item }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card elevation={3} className={classes.card}>
        <CardMedia
          className={classes.media}
          image={'https://picsum.photos/250/150'}
          title="Paella dish"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Blog {item.id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
