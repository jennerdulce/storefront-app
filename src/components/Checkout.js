import React from 'react'
import { Paper, Typography, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(55),
      height: theme.spacing(80),
    },
    form: {
      '& .MuiTextField-form': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    }
  }
}))


function Checkout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography gutterBottom variant="subtitle1">
          Order Summary
                </Typography>
        <Typography gutterBottom variant="subtitle1">
          Beef
                </Typography>
        <Typography gutterBottom variant="subtitle1">
          Item Description
                </Typography>
        <Typography gutterBottom variant="subtitle1">
          Price
                </Typography>
        <Typography gutterBottom variant="subtitle1">
          Total
                </Typography>
        <Typography gutterBottom variant="subtitle1">
          Total Price
                </Typography>

        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <Typography gutterBottom variant="subtitle1">
              Billing Address
                </Typography>
            <TextField id="standard-basic" label="Full Name" />
            <TextField id="standard-basic" label="Address" />
            <TextField id="standard-basic" label="City" />
            <TextField id="standard-basic" label="State" />
            <TextField id="standard-basic" label="Zip" />
            <TextField id="standard-basic" label="Standard" />
          </div>
          <div>
            <Typography gutterBottom variant="subtitle1">
              Payment Details
                </Typography>
                <TextField id="standard-basic" label="Credit Card #" />

                <TextField id="standard-basic" label="CVV" />
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default Checkout
