const logger = store => next => action => {
  // Do work in here
  console.log('__ACTION__ =====> ', action)
  try {
    // Does work and then passes the action to the next middleware and eventually the reducer
    const result = next(action)
    console.log('__STATE__', store.getState())
    return result;
  } catch (e) {
    // Adding a property called action to the Error object
    e.action = action

    // Refers to 
    return e;
  }

}

export default logger