import { createSlice } from '@reduxjs/toolkit'

const filterReducer = createSlice({
  name: 'filter',
  initialState: 'all',
  reducers: {
    set: (state, action) => {
      return action.payload
    }
  }
})

export default filterReducer.reducer
