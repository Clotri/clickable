'use client'
import { useEffect, useState } from 'react'

interface ProgresBarInterface {
  isStarted: boolean
  setIsStarted: (a: boolean) => void
  onLoadingEnded: () => void
  duration: number
}

const ProgresBar = ({
  isStarted,
  setIsStarted,
  onLoadingEnded,
  duration
}: ProgresBarInterface) => {
  const [value, setValue] = useState<number>(0)

  if (isStarted) {
    setTimeout(() => {
      if (value < 100) {
        const newValue: number = value + 1
        setValue(newValue)
      }
      if (value === 100) {
        onLoadingEnded()
        setIsStarted(false)
        setValue(0)
      }
    }, duration)
  }

  useEffect(() => {}, [])
  return (
    <progress id="file" className="bg-red" value={value} max={100}></progress>
  )
}
export default ProgresBar
