import { createSlice } from '@reduxjs/toolkit'

const cartReducer = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    set: (state, action) => {
      const exist = state.some(x => x.id === action.payload.id)
      if (exist) {
        const prd = state.find(x => x.id === action.payload.id)
        prd.amount += action.payload.amount
        return [...state]
      }
      return [...state, action.payload]
    }
  }
})

export default cartReducer.reducer
