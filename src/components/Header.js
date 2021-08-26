import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { ThemeContext } from '../context/ThemeSettings.js'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  link: {
    color: 'black',
    textDecoration: 'none'
  }

}))

function Header() {
  const numOfCartItems = useSelector((state) => state.cart.length)
  const styles = useContext(ThemeContext)
  const classes = useStyles()

  // function toggleCart() {
  //   const visible = styles.showCart === "hidden" ? "show" : "hidden"
  //   styles.setShowList(visible)
  // }

  return (
    <AppBar style={styles.themeSettings} position="static">
      <Toolbar className={classes.root}>
        <Link className={classes.link} to='/'>
          <Typography data-testid="header-title" variant="h6" >
            Our Store
        </Typography>
        </Link>
        <Link className={classes.link} to='/checkout'>
          <Button data-testid="cart-button" color="inherit">Cart ({numOfCartItems})</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
