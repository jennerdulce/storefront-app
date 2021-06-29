// Create the Store
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import inventory from './inventory.js'
import cart from './cart.js'

// Import Middleware
import loggerMiddleware from './middleware/logger.js'
import thunk from './middleware/thunk.js'

const reducers = combineReducers({ inventory, cart })
const store = () => {
  // Also apply Middleware
  return createStore(reducers, composeWithDevTools(applyMiddleware(loggerMiddleware, thunk)))
}

export default store();