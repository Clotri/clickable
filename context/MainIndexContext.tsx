import { exampleStructure } from '@/components/exampleStructure'
import { useObject } from '@/hooks/useObject'
import { createContext } from 'react'

type MainIndexContextProps = {
  children: React.ReactNode
}
type MainIndexContext = {
  state: {
    levels: []
    warehouse: []
    gold: number
  }
  updateState: (name: string, valu: unknown) => void
}

export const MainIndexContext = createContext<MainIndexContext | null>(null)

export const MainIndexContextProvider = ({
  children
}: MainIndexContextProps) => {
  const { state, updateState } = useObject({
    levels: exampleStructure.levels,
    warehouse: null,
    gold: 0
  })
  return (
    <MainIndexContext.Provider value={{
      state, updateState
    }}>
      {children}
    </MainIndexContext.Provider>
  )
}
