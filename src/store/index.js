// Create the Store
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import inventory from './inventory.js'

const reducers = combineReducers({ inventory })
const store = () => {
  return createStore(reducers, composeWithDevTools())
}

export default store();