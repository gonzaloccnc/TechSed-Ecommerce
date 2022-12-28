import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { fetchAsyncThunk } from './store/thunks/asyncThunk'
import { store } from './store/storeRedux'
import { loadFromLocalStorage } from './store/reducers/cart/CartReducer'

store.dispatch(fetchAsyncThunk())
store.dispatch(loadFromLocalStorage(JSON.parse(window.localStorage.getItem('cart')) || []))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

)
