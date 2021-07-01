// Create the Store
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import cart from './cart.js'
import inventory from './inventory.js'
import currentProduct from './currentProduct.js'

// Import Middleware
import loggerMiddleware from './middleware/logger.js'
import thunk from './middleware/thunk.js'

const reducers = combineReducers({ inventory, cart, currentProduct })
const store = () => {
  // Also apply Middleware
  return createStore(reducers, composeWithDevTools(applyMiddleware(loggerMiddleware, thunk)))
}

export default store();