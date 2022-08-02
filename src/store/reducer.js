const inic = {
  products: [],
  filter: 'all',
  cart: []
}

const reducer = (state = inic, action) => {
  switch (action.type) {
    case 'set/products':{
      return {
        ...state,
        products: [...state.products, ...action.payload]
      }
    }
    case 'all/products': {
      return {
        ...state,
        products: [...state.products]
      }
    }
    case 'filter/set': {
      return {
        ...state,
        filter: action.payload
      }
    }
    default:{
      return state
    }
  }
}

export default reducer
