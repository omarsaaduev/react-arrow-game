import type { FC } from "react"

interface IResultMessageProps {
    isSuccessEndGame: boolean
}
const ResultMessage: FC<IResultMessageProps> = (props) => {
    const {isSuccessEndGame} = props
  return (
    <div>
      {isSuccessEndGame ? <span>Вы выиграли</span> : <span>Вы проиграли</span>}
    </div>
  )
}

export default ResultMessage
