'use client'

import { createContext, useEffect } from 'react'
import { exampleStructure } from '../components/exampleStructure'
import { useObject } from '../hooks/useObject'

const WarehouseAmount = ({ state, level }) => {
  if (state?.warehouse && state?.warehouse[level.itemName]) {
    return <div>Ilość: {state.warehouse[level.itemName]}</div>
  } else {
    return <div>Ilość: 0</div>
  }
}

interface MainContext {
  state: any
  updateState: (name: string, value: any) => void
}

export const MainContext = createContext({})

export default function App() {
  const { state, updateState } = useObject({
    levels: exampleStructure.levels,
    warehouse: undefined,
    gold: 0
  })

  useEffect(() => {
    console.log('state', state)
  }, [state])
  useEffect(() => {}, [])
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
          {state.levels.map((level, index) => {
            return (
              <div key={index}>
                <div>{level.itemName}</div>
                <WarehouseAmount level={level} state={state} />
              </div>
            )
          })}

          {/* End Magazyn */}
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
