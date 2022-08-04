import { applyMiddleware, legacy_createStore as creacteStore } from 'redux'
import { asyncMiddleware } from './asyncMiddleware'
import { Provider } from 'react-redux'
import reducer from './reducer'

const data = creacteStore(reducer, applyMiddleware(asyncMiddleware))

const StoreRedux = ({ children }) => {
  return (
    <Provider store={data}>
      {children}
    </Provider>
  )
}

export default StoreRedux
