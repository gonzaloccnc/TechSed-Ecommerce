import { createSlice } from '@reduxjs/toolkit'

const cartReducer = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    set: (state, action) => {
      const exist = state.find(x => x.id === action.payload.id)
      if (exist) {
        const updateProduct = { ...exist }
        updateProduct.amount += action.payload.amount
        return [...state.filter(x => x.id !== action.payload.id), updateProduct]
      }

      return [...state, action.payload]
    },

    delete: (state, action) => {
      const products = [...state.filter(x => x.id !== action.payload)]
      window.localStorage.setItem('cart', JSON.stringify(products))
      return [...products]
    },

    loadFromLocalStorage: (state, action) => {
      if (action.payload.length) return [...state, ...action.payload]
      return [...state]
    }
  }
})

export const { loadFromLocalStorage } = cartReducer.actions
export default cartReducer.reducer
