import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { fetchAsyncThunk } from './store/thunks/asyncThunk'
import { store } from './store/storeRedux'

store.dispatch(fetchAsyncThunk())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

)
