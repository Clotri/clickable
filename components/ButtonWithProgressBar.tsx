'use client'
import { useContext, useState } from 'react'
import ProgresBar from './ProgresBar'
import { MainContext } from '../app/fonts/page'

const ButtonWithProgressBar = (props) => {
  const { state, updateState } = useContext(MainContext)
  const { itemName, duration } = props
  const [isStarted, setIsStarted] = useState<boolean>(false)

  const onLoadingEnded = () => {
    // do smth
    console.log(
      'state[itemName]',
      state[itemName],
      'warehouse',
      state.warehouse
    )

    const warehouse = state.warehouse || {}
    const updatedWarehouse = {
      ...warehouse,
      [itemName]: warehouse[itemName] ? warehouse[itemName] + 1 : 1
    }
    updateState('warehouse', updatedWarehouse)
  }
  return (
    <div className="flex flex-col pb-[20px]">
      <div className="w-[95%] flex justify-center my-[10px]">
        <ProgresBar
          {...{
            setIsStarted,
            onLoadingEnded
          }}
          isStarted={isStarted}
          duration={duration}
        />
      </div>
      <button
        onClick={() => {
          setIsStarted(true)
        }}
      >
        Wytwórz
      </button>
    </div>
  )
}

export default ButtonWithProgressBar
