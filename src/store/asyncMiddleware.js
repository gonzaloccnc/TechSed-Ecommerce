export const fetchThunk = () => async dispatch => {
  dispatch({ type: 'products/pending' })
  try {
    const req = await fetch(import.meta.env.VITE_API)
    const res = await req.json()
    dispatch({ type: 'products/fulfilled', payload: res })
  } catch (e) {
    dispatch({ type: 'products/error', error: e.message })
  }
}
export const asyncMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  next(action)
}
