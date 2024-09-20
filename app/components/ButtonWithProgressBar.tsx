'use client'
import { useState } from 'react'
import ProgresBar from './ProgresBar'

const ButtonWithProgressBar = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const onLoadingEnded = () => {
    // do smth
  }
  return (
    <div>
      <ProgresBar
        {...{
          setIsStarted,
          onLoadingEnded
        }}
        isStarted={isStarted}
      />
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
