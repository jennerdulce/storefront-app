import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    paddingTop: '4rem',
    paddingBottom: '4rem',
    background: '#D2D2D2',
  },
  container: {
    top: 'auto',
    bottom: 0,
    marginTop: '4rem'
  },
  top: {
    color: 'black'
  },
  bottom: {
    color: '#737373'
  }

}))

function Footer() {
  let classes = useStyles()

  return (
    <AppBar className={classes.container} position="fixed">
      <Toolbar className={classes.root}>
        <Typography className={classes.top} variant="h6" >
          &copy; 2020 Jenner Dulce 401
        </Typography>
        <Typography className={classes.bottom} variant="subtitle1" >
          React = Redux + Material UI
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
