import { useAppSelector } from "../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import type { IMapArrowCodes } from "../../constants/types"

const RandomKeys = () => {
    const {step} = useAppSelector(state => state.playGround)
  return (
    <div>
      {step.map((element, index) => (
        <span key={index}>{MAP_ARROW_CODES[element.currentStep as keyof IMapArrowCodes]}</span>
      ))}
    </div>
  )
}

export default RandomKeys
