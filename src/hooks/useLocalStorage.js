import { useState } from 'react'

const useLocalStorage = (key, initial) => {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initial
    } catch (ex) {
      return initial
    }
  })

  const setValue = value => {
    try {
      setStoreValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (ex) {
      console.error(ex)
    }
  }

  return [storeValue, setValue]
}

export {
  useLocalStorage
}
