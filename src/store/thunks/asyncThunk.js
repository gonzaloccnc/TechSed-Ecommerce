import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAsyncThunk = createAsyncThunk('get/products', async () => {
  try {
    const req = await fetch(import.meta.env.VITE_API)
    const res = await req.json()
    return [...res]
  } catch (e) {
    return e.message
  }
})
