import ButtonWithProgressBar from "@/components/ButtonWithProgressBar"
import { MainIndexContext } from "@/context/MainIndexContext"
import { useContext } from "react"

const WarehouseAmount = ({ state, level }) => {
  if (state?.warehouse && state?.warehouse[level.itemName]) {
    return <div>Ilość: {state.warehouse[level.itemName]}</div>
  } else {
    return <div>Ilość: 0</div>
  }
}
const IndexView = () => {
  const { state, updateState } = useContext(MainIndexContext)
  return (<>
    <div>
      <div className="bg-red-300">asdasd</div>
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
  </>)
}

export default IndexView
