import { createSlice } from '@reduxjs/toolkit'

const filterReducer = createSlice({
  name: 'filter',
  initialState: {
    type: 'all',
    sort: null,
    high: null,
    low: null
  },
  reducers: {
    set: (state, action) => {
      return { ...state, ...action.payload }
    }
  }
})

export default filterReducer.reducer
