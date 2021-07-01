import React from 'react'
import { Typography, makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Button } from '@material-ui/core'


const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  header: {
    textAlign: 'center',
    marginTop: '10rem'
  },
  description: {
    textAlign: 'center',
    color: '#B8B8B8'
  },
  mediaRoot: {
    width: 650,
  },
  media: {
    height: 500,
  }
});

function Details() {
  // const category = useSelector((state) => state.inventory.currentSort)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h3" gutterBottom>
        <h3>ITEM NAME</h3>
        {/* {category.toUpperCase()} */}
      </Typography>
      <Typography className={classes.description} variant="h6" gutterBottom>
        Description of Item
      </Typography>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justify="space-around"
        style={{ minHeight: '75vh' }}
      >
        <Card
          className={classes.mediaRoot}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1606787364406-a3cdf06c6d0c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Typography gutterBottom variant="h5" component="h6">
                  Stock: 9999
            </Typography>
                <Typography gutterBottom variant="h5" component="h6">
                  $6.99
            </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
        <Button style={{ width: 650 }} variant="contained" color="primary">
          Primary
        </Button>
        <Typography className={classes.header} variant="h5" gutterBottom>
          <h3>Related Items</h3>
        </Typography>
        <Grid
          className={classes.mediaRoot}
          container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Grid container item xs={3}>
            Similar Item 1
          </Grid>
          <Grid container item xs={3}>
            Similar Item 2
          </Grid>
          <Grid container item xs={3}>
            Similar Item 3
          </Grid>
        </Grid>
        <Typography className={classes.header} variant="h5" gutterBottom>
          <h3>Product Details</h3>
        </Typography>
      </Grid>
    </div >
  )
}



export default Details
