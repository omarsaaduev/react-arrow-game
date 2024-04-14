/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, type FC } from "react"
import { MAP_ARROW_CODES } from "../../constants"
import { useAppDispatch } from "../../app/hooks"
import { setEnteredValue } from "../../app/slices/playGround"
import { useKeyPressedElement } from "../../hooks/useKeyPressedElement"



interface IKeyPressedProps {
    isTimerActive: boolean
}

const KeyPressed: FC<IKeyPressedProps> = (props) => {
    const {isTimerActive} = props
    const dispatch = useAppDispatch()
    const keyPressedElement = useKeyPressedElement()

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        // eslint-disable-next-line no-prototype-builtins
        if(MAP_ARROW_CODES.hasOwnProperty(e.key) && isTimerActive){
            dispatch(setEnteredValue(e.key))
        }
    },[dispatch, isTimerActive]) 

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isTimerActive])
  return (
    <div>
      нажатая
      {keyPressedElement}
    </div>
  )
}

export default KeyPressed
