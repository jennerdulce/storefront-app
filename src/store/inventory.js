// Initial State
const initialState = {
  products: [],
  inventory: [],
  currentSort: ''
}

// Retrieve List
// async function fetch() {
//   axios.get('https://storefront-db.herokuapp.com/api/v1/electronics')
//   .then(res => {
//     console.log(res.data)
//     products = products.concat(res.data)
//     initialState.inventory = initialState.inventory.concat(res.data)
//   })

// axios.get('https://storefront-db.herokuapp.com/api/v1/food')
//   .then(res => {
//     console.log(res.data)
//     products = products.concat(res.data)
//     initialState.inventory = initialState.inventory.concat(res.data)
//   })
// }

// Reducer Function
export default function reducer(state = initialState, action) {

  const { type, payload } = action

  switch (type) {
    case 'CHANGE':
      let newList = state.products.filter((obj) => payload === obj.category)
      console.log("INVENTORY ===========", newList)
      return { ...state, inventory: newList, currentSort: payload }
    case 'RENDERLIST':
      console.log(payload)
      return { ...state, products: payload }
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

export const updateList = (list) => {
  return {
    type: 'RENDERLIST',
    payload: list
  }
}






// OLD SOLUTION

// Initial State
// const products = [
//   { item: 'TV', cost: 698, stock: 1849, image: 'TV.jpg', category: 'electronics' },
//   { item: 'Monitor', cost: 100.99, stock: 854, image: 'Monitor.jpg', category: 'electronics' },
//   { item: 'Mouse', cost: 50, stock: 944, image: 'Mouse.jpg', category: 'electronics' },
//   { item: '1TB USB', cost: 49.99, stock: 238, image: 'USB.jpg', category: 'electronics' },
//   { item: 'Keyboard', cost: 89.99, stock: 956, image: 'Keyboard.jpg', category: 'electronics' },
//   { item: 'Calzones', cost: 16.99, stock: 200, image: 'Calzone.jpg', category: 'food' },
//   { item: 'Apples', cost: 1.99, stock: 999, image: 'Apple.jpg', category: 'food' },
// ]

// const initialState = {
//   inventory: products,
//   currentSort: ''
// }