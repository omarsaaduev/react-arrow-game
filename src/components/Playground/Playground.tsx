import type { FC} from 'react';
import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setCurrentStep, setSteps, setUnSuccess } from '../../app/slices/playGround'
import Controls from '../Controls/Controls'
import RandomKeys from '../RandomKeys/RandomKeys';
import KeyPressed from '../KeyPressed/KeyPressed';
import Score from '../Score/Score';
import Modal from '../Modal/Modal';

const Playground:FC = () => {
    const state = useAppSelector(state => state.playGround)
    const dispatch = useAppDispatch()
    const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
    const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

    const [isShowModal, setIsShowModal] = useState<boolean>(false)
    const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false)


    useEffect(() => {
      const isSuccessfull = state.totalSuccess === 3;
      const isUnSuccessfull = state.totalUnSuccess === 3;

      isSuccessfull && setIsSuccessEndGame(true)
      isUnSuccessfull && setIsSuccessEndGame(false)

      if(isSuccessfull || isUnSuccessfull){
        setIsShowModal(true)
        setIsTimerActive(false)
      }
    }, [state.totalSuccess, state.totalUnSuccess])

    useEffect(() => {
        if(isTimerActive){
            refreshIntervalId.current = setInterval(() => {
                dispatch(setUnSuccess())
                dispatch(setCurrentStep())
                dispatch(setSteps())
            }, 2000)
        }else{
            clearInterval(refreshIntervalId.current as NodeJS.Timeout)
        }

        return () => {
            clearInterval(refreshIntervalId.current as NodeJS.Timeout)
        } 
            
    }, [isTimerActive, dispatch])
  return (
    <div>
        <div>{state.currentStep}</div>
      <Controls isTimerActive={isTimerActive} setIsTimerActive={setIsTimerActive}/>
      <RandomKeys/>
      <KeyPressed isTimerActive={isTimerActive}/>
      <Score/>
      {isShowModal && <Modal isSuccessEndGame={isSuccessEndGame} setIsShowModal = {setIsShowModal}/>}
    </div>
  )
}

export default Playground

