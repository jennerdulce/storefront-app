import React from 'react'
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, GridList, GridListTile } from '@material-ui/core';
import { useSelector } from 'react-redux'

// Redux Styling For Cards
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: '5rem',
    marginBottom: '1rem',
    marginRight: '1rem'
  },
  media: {
    height: 140,
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginBottom: '8rem'
  }
}))

function ItemCard() {
  const classes = useStyles();
  const items = useSelector((state) => state.inventory.inventory)

  return (
    <div className={classes.grid}>
      <GridList cellHeight="auto" cols={items.length >= 3 ? 3 : 2} aria-label="list">
        {
          items && items.map(item =>
            <GridListTile  key={item._id} aria-label="list-item">
              <Card className={classes.root}>
                <CardActionArea >
                  <CardMedia
                    className={classes.media}
                    image={`/images/${item.image}`}
                    title={item.item}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.item}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Add to Cart
          </Button>
                  <Button size="small" color="primary">
                    View Details
          </Button>
                </CardActions>
              </Card>
            </GridListTile>
          )
        }
      </GridList>
    </div>
  )
}

export default ItemCard