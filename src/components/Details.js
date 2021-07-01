import React from 'react'
import { Typography, makeStyles, Card, CardActionArea, CardContent, CardMedia, Grid, Button, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  header: {
    textAlign: 'center',
    marginTop: '3rem'
  },
  description: {
    textAlign: 'center',
    color: '#B8B8B8',
    marginBottom: '6rem'
  },
  mediaWidth: {
    width: 650,
  },
  media: {
    height: 500,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  button: {
    marginTop: '3rem'
  }
}));

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
        spacing={1}
        direction="column"
        alignItems="center"
        justify="space-around"
      >
        <Card
          className={classes.mediaWidth}>
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
        <Button className={classes.button} style={{ width: 650 }} variant="contained" color="primary">
          Add to Cart
        </Button>
        <Typography className={classes.header} variant="h5" gutterBottom>
          <h3 style={{textAlign: 'left'}}>Related Items</h3>
        </Typography>
        <Grid
          className={classes.mediaWidth}
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
          <h3 style={{textAlign: 'left'}}>Product Details</h3>
          <Accordion className={classes.mediaWidth}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Specifications</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
          </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.mediaWidth}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>User Reviews</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
          </Typography>
            </AccordionDetails>
          </Accordion>
        </Typography>
      </Grid>
    </div >
  )
}



export default Details