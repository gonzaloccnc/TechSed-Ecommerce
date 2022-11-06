import { createSlice } from '@reduxjs/toolkit'
import { fetchAsyncThunk } from '../../thunks/asyncThunk'

const productsReducer = createSlice({
  name: 'products',
  initialState: { status: 'idle', products: [], error: null },
  reducers: {

    set: (state, action) => {
      return { ...state, products: [...state.products, ...action.payload] }
    },

    all: state => {
      return [...state.products]
    }
  },

  extraReducers (builder) {
    builder
      .addCase(fetchAsyncThunk.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAsyncThunk.fulfilled, (state, action) => {
        return { ...state, status: 'succeeded', products: action.payload }
      })
      .addCase(fetchAsyncThunk.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default productsReducer.reducer
