import axios from 'axios'

// Initial State
const initialState = {
  // List of ALL ITEMS
  products: [],
  // List of Items within the selected category
  inventory: [],
  currentSort: ''
}

// Reducer Function
export default function reducer(state = initialState, action) {

  const { type, payload } = action

  switch (type) {
    case 'CHANGE':
      let newList = state.products.filter((obj) => payload === obj.category)
      return { ...state, inventory: newList, currentSort: payload }
    case 'RENDERLIST':
      return { ...state, products: payload }
    case 'ADD':
      // Updates on Website
      console.log(state.products)
      let subtractStockProducts = state.products.map((item) => payload._id === item._id ? { ...item, stock: item.stock - 1 } : item)
      let subtractStockInventory = state.inventory.map((item) => payload._id === item._id ? { ...item, stock: item.stock - 1 } : item)
      return { ...state, products: subtractStockProducts, inventory: subtractStockInventory }
    default:
      return state
  }
}

// Action Creators
export const changeCategory = (category) => {
  return {
    type: 'CHANGE',
    payload: category
  }
}

export const addItem = (payload) => async dispatch => {
  // Updates on API
  if (payload.category === 'food') {
    await axios.put(`https://storefront-db.herokuapp.com/api/v1/food/${payload._id}`, { stock: payload.stock - 1 })
  } else if (payload.category === 'electronics') {
    await axios.put(`https://storefront-db.herokuapp.com/api/v1/electronics/${payload._id}`, { stock: payload.stock - 1 })
  }
  dispatch(actualAddItem(payload))
}

function actualAddItem(item) {
  return {
    type: "ADD",
    payload: item
  }
}

export const updateList = () => async dispatch => {
  axios.get('https://storefront-db.herokuapp.com/api/v1/electronics')
    .then(res => {
      axios.get('https://storefront-db.herokuapp.com/api/v1/food')
        .then(resTwo => {
          dispatch(actualUpdateList([...res.data, ...resTwo.data]))
        })
    })
}

function actualUpdateList(data) {
  return {
    type: 'RENDERLIST',
    payload: data
  }
}
