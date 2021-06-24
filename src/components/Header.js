import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { ThemeContext } from '../context/ThemeSettings.js'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

function Header() {
  const numOfCartItems = useSelector((state) => state.cart.length)
  const styles = useContext(ThemeContext)
  const classes = useStyles()
  
  function toggleCart() {
    const visible = styles.showCart === "hidden" ? "show" : "hidden"
    styles.setShowList(visible)
  }


  return (
    <AppBar style={styles.themeSettings} position="static">
      <Toolbar className={classes.root}>
        <Typography data-testid="header-title" variant="h6" >
          Our Store
        </Typography>
        <Button data-testid="cart-button" color="inherit" onClick={() => toggleCart()}>Cart ({numOfCartItems})</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
