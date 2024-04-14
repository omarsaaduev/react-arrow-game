import { useAppSelector } from "../app/hooks"
import { MAP_ARROW_CODES } from "../constants"
import type { IMapArrowCodes } from "../constants/types"

export const useKeyPressedElement = (): string => {
    const state = useAppSelector(state => state.playGround)
    if(state.step.length){
        const enteredValue = state.step[state.currentStep - 1].enteredValue

        if(enteredValue){
            return MAP_ARROW_CODES[enteredValue as  keyof IMapArrowCodes]
        }
    }
    return '⌛️'
}