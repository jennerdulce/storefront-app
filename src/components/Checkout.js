import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      height: theme.spacing(100),
    },
  },
}));


function Checkout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography gutterBottom variant="subtitle1">
          HELLO PAPER
                </Typography>
        <h1>HELLO</h1>
      </Paper>
    </div>
  );
}

export default Checkout
