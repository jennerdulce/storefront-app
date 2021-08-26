import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, GridList, GridListTile } from '@material-ui/core';
import { addItem } from '../store/inventory.js'

// Redux Styling
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
    marginBottom: '20rem'
  },
  link: {
    textDecoration: 'none'
  }
}))

function ItemCard() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const items = useSelector((state) => state.inventory.inventory)

  async function add(item) {
    dispatch(addItem(item))
  }

  function qualityOfLife(){
    // Will be passing in object through here
    // Set state of current item
    console.log('BUTTON STILL WORKS')
  }

  return (
    <div className={classes.grid}>
      <GridList cellHeight="auto" cols={3} aria-label="list">
        {
          items && items.map(item =>
            <GridListTile key={item._id} aria-label="list-item">
              <div>Stock {item.stock}</div>
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
                  <Button onClick={() => add(item)} size="small" color="primary">
                    Add to Cart
          </Button>
                  <Link className={classes.link} to='/details'>
                    <Button onClick={() => qualityOfLife()} size="small" color="primary">View Details</Button>
                  </Link>
                </CardActions>
              </Card>
            </GridListTile>
          )
        }
      </GridList>
    </div>
  )
}
// ADD TO VIEW DETAILS BUTTON
// <Link to='/details'> wrap contents </Link>

export default ItemCard;