import { createContext } from 'react'

interface MainContext {
  state: unknown
  updateState: (name: string, value: unknown) => void
}

export const MainContext = createContext({})
