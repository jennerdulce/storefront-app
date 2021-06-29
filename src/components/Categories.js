import React, { useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { changeCategory, updateList } from '../store/inventory.js';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#ffffff',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '1rem'
  },
}))

function Categories() {
  const classes = useStyles()
  const dispatch = useDispatch();

  async function change(payload) {
    dispatch(changeCategory(payload))
  }

  async function getData(payload) {
    dispatch(updateList())
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.root}>
      <Typography variant="h6" >
        Browse our Categories
      </Typography>
      <div>
        <Button data-testid="electronics" color="inherit" onClick={() => change('electronics')}>Electronics</Button> |
        <Button data-testid="food" color="inherit" onClick={() => change('food')}>Food</Button>
      </div>
    </div>
  )
}

export default Categories
