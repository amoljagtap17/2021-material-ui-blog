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

const useStyles = makeStyles({
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
  cardBadge: {
    color: (item) => {
      if (item.category === 'movies') {
        return 'orange'
      }

      if (item.category === 'books') {
        return 'green'
      }

      return 'red'
    },
  },
})

export const GridItem = ({ item }) => {
  const classes = useStyles(item)

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card elevation={3} className={classes.card}>
        <CardMedia
          className={classes.media}
          image={'https://picsum.photos/250/150'}
          title="Card Pic"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h6"
            component="h1"
            className={classes.cardBadge}
          >
            {item.category}
          </Typography>
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
