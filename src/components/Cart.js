import React from 'react'
import { makeStyles, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../store/cart.js'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeSettings.js'

// Redux Styling for List
const useStyles = makeStyles(() => ({
  list: {
    width: '250px',
    position: 'absolute',
    right: '10px'
  },
  listItem: {
    border: '1px solid black',
    borderRadius: '5px'
  }
}))

const cartVisbilty = {
  show: {
    visibility: 'visible'
  },
  hidden: {
    visibility: 'hidden'
  },
}

function Cart() {
  const dispatch = useDispatch();
  const classes = useStyles()
  const cartItems = useSelector((state) => state.cart)
  const styles = useContext(ThemeContext)

  function remove(item) {
    dispatch(removeItem(item))
  }

  return (
    <div>
      <List className={classes.list} style={cartVisbilty[styles.showCart]} >
        {
          cartItems.map(item =>
            <ListItem ket={item._id} className={classes.listItem}>
              <ListItemText
                primary={item.item}
              />
              <ListItemSecondaryAction>
                <IconButton onClick={() => remove(item)} edge="end" aria-label="delete">
                  x
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )}
      </List>
    </div>
  )
}
export default Cart
