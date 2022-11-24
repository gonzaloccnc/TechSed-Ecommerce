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
    }
  }
})

export default cartReducer.reducer
