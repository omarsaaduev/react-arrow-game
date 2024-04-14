import type React from "react"
import { useAppDispatch } from "../../app/hooks"
import { setReset } from "../../app/slices/playGround"
import type { FC } from "react"
import ResultMessage from "../ResultMessage/ResultMessage"

interface IModalProps {
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
    isSuccessEndGame: boolean
}

const Modal: FC<IModalProps> = (props) => {
    const {setIsShowModal, isSuccessEndGame} = props
    const dispatch = useAppDispatch()
    const handleClose = () => {
        dispatch(setReset());
        setIsShowModal(false)
    }
  return (
    <div>
      <h3>Modal</h3>
      <ResultMessage isSuccessEndGame={isSuccessEndGame}/>
      <button onClick={handleClose}>Start new game</button>
    </div>
  )
}

export default Modal
