import { Provider } from 'react-redux'
import reducer from './reducer'
import { legacy_createStore as creacteStore } from 'redux'

const data = creacteStore(reducer)

const StoreRedux = ({ children }) => {
  return (
    <Provider store={data}>
      {children}
    </Provider>
  )
}

export default StoreRedux
