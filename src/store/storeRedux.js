import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from './reducers/products/ProductsReducer'
import FilterReducer from './reducers/filter/FilterReducer'
import CartReducer from './reducers/cart/CartReducer'

export const store = configureStore({
  reducer: {
    entities: ProductsReducer,
    filter: FilterReducer,
    cart: CartReducer
  }
})
