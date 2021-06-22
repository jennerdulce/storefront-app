import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import { ThemeContext } from '../context/ThemeSettings.js'

function Header() {

  const styles = useContext(ThemeContext)

  return (
    <AppBar style={styles} position="static">
      <Toolbar >
        <Typography data-testid="header-title" variant="h6" >
          Our Store
        </Typography>
        <Button data-testid="cart-button" color="inherit">Cart (0)</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
