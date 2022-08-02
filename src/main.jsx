import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import StoreRedux from './store/StoreRedux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreRedux>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreRedux>

)
