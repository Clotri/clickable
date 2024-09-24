'use client'
import { createContext, useEffect, useState } from 'react'
import ButtonWithProgressBar from './components/ButtonWithProgressBar'
import Layout from './layout/Layout'
import { useObject } from './hooks'
import SingleItemCardStyles from './components/SingleItemCard'
import { exampleStructure } from './components/exampleStructure'
interface MainContext {
  state: any
  updateState: (name: string, value: any) => void
}

export const MainContext = createContext({})

export default function App() {
  const { state, updateState } = useObject({
    levels: exampleStructure.levels
  })

  useEffect(() => {
    console.log('state', state)
  }, [state])
  return (
    <Layout>
      <MainContext.Provider
        value={{
          state,
          updateState
        }}
      >
        <div>
          {/* Magazyn */}
          {/* {state.levels.map()} */}
        </div>

        {/* <MappedElements > */}
        <div className="flex gap-3">
          {state.levels.map((singleLevel, index) => {
            return (
              <div
                key={index}
                className="w-[200px] h-[300px] bg-slate-100 rounded flex flex-col items-center justify-between"
              >
                <div className="pt-[20px]">{singleLevel.itemName}</div>
                <div>Pic</div>
                <ButtonWithProgressBar
                  key={index}
                  itemName={singleLevel.itemName}
                  duration={singleLevel.duration}
                />
              </div>
            )
          })}
        </div>
        {/* </MappedElements>  */}
      </MainContext.Provider>
    </Layout>
  )
}
