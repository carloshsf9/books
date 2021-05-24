import { useState, useEffect } from 'react'
import store from 'store'

export const useLocalState = (initialValue: any, name: string) => {
  if (!name) {
    throw new Error('Name must be provided to persist to localStorage')
  }
  const actualInitialValue =
    store.get(name) !== undefined ? store.get(name) : initialValue

  const [value, setValue] = useState(actualInitialValue)

  useEffect(() => {
    store.set(name, value)
  }, [name, value])

  return [value, setValue]
}
