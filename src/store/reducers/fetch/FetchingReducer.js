import { createSlice } from '@reduxjs/toolkit'

const fetching = { loading: 'iddle', error: null }

const fetchingReducer = createSlice({
  name: 'status',
  initialState: fetching,
  reducers: {
    pending: state => {
      return { ...state, loading: 'pending' }
    },

    fulfilled: state => {
      return { ...state, loading: 'success' }
    },

    error: (state, action) => {
      return { error: action.error, loading: 'rejected' }
    }
  }
})

export default fetchingReducer.reducer
