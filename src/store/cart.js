// Initial State
const initialState = []

// Reducer Function
export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'ADD':
      console.log('FOLLOWING ITEM ADDED: \n', payload._id)
      return [...state, payload]
    case 'REMOVE':
      let newList = state.filter(item => item._id !== payload._id)
      return [...newList]
    default:
      return state
  }
}

// Action Creators
export const removeItem = (item) => {
  console.log('FOLLOWING ITEM DELETED: \n', item)
  return {
    type: "REMOVE",
    payload: item
  }
}
