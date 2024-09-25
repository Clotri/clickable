import { useState } from 'react'

export function useObject(initialState: any) {
  const [state, setState] = useState<any>(initialState)
  function updateState(key: string, value: any) {
    setState({
      ...state,
      [key]: value
    })
  }
  function resetState() {
    setState(initialState)
  }
  return { state, updateState, resetState }
}
