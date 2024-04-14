import type { FC } from "react"
import { useAppSelector } from "../../app/hooks"

const Score: FC = () => {
    const state = useAppSelector(state => state.playGround)
  return (
    <div>
      <h3>SuccessFull</h3>
      <div>Success: {state.totalSuccess}</div>
      <div>UnSuccess: {state.totalUnSuccess}</div>
    </div>
  )
}

export default Score
