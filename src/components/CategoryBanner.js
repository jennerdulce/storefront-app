import React from 'react'
import { When } from 'react-if'
import { useSelector } from 'react-redux'
import { Typography, makeStyles } from '@material-ui/core';


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
  }
});

function CategoryBanner() {
  const category = useSelector((state) => state.inventory.currentSort)
  const classes = useStyles()

  return (
    <When condition={category}>
      <div className={classes.root}>
        <Typography className={classes.header}variant="h3" gutterBottom>
          {category.toUpperCase()}
        </Typography>
        <Typography className={classes.description} variant="h6" gutterBottom>
          Description of Category Items
      </Typography>
      </div>
    </When>
  )
}

export default CategoryBanner
