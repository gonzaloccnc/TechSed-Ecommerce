import { combineReducers } from 'redux'

const fetching = { loading: 'iddle', error: null }

const fetchingReducer = (state = fetching, action) => {
  switch (action.type) {
    case 'products/pending': {
      return { ...state, loading: 'pending' }
    }
    case 'products/fulfilled': {
      return { ...state, loading: 'success' }
    }
    case 'products/error': {
      return { error: action.error, loading: 'rejected' }
    }
    default :
      return state
  }
}

const filterReducer = (state = 'all', action) => {
  switch (action.type) {
    case 'filter/set':
      return action.payload
    default:
      return state
  }
}

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'products/fulfilled': {
      return action.payload
    }
    case 'set/products':{
      return [...state, ...action.payload]
    }
    case 'all/products': {
      return [...state]
    }
    default:{
      return state
    }
  }
}

const reducer = combineReducers({
  entities: combineReducers({
    products: productsReducer,
    status: fetchingReducer
  }),
  filter: filterReducer
  // cart: []
})

export default reducer
