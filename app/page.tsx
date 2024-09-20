'use client'
import { createContext, useEffect } from 'react'
import ButtonWithProgressBar from './components/ButtonWithProgressBar'
import Layout from './layout/Layout'
import { useObject } from './hooks'
export const MainContext = createContext({})
export default function App() {
  const { state, updateState } = useObject({})
  useEffect(() => {
    updateState('asd', 3)
  }, [])
  console.log(state)
  return (
    <Layout>
      <MainContext.Provider
        value={{
          state,
          updateState
        }}
      >
        <ButtonWithProgressBar />
      </MainContext.Provider>
    </Layout>
  )
}
