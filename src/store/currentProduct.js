// Initial State
const initialState = {}

export default function reducer(state = initialState, action) {

  const { type, payload } = action

  switch (type) {
    case 'CHOOSEPRODUCT':
      console.log('THIS IS CURRENT PRODUCT', payload)
      return payload
    default:
      return state
  }
}

export const changeCurrentProduct = (product) => {
  return {
    type: 'CHOOSEPRODUCT',
    payload: product
  }
}
