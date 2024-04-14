import { createSlice } from "@reduxjs/toolkit"
import { ARR_ARROW_CODES } from "../../constants"
import { act } from "react-dom/test-utils"

export interface IPlaygroundSetSteps {
    currentStep: string | null
    enteredValue: string | null
    success: boolean | null
}

interface IPlayground {
    currentStep: number,
    step: IPlaygroundSetSteps[],
    totalSuccess: number,
    totalUnSuccess: number,
}
export const initialState: IPlayground = {
    currentStep: 0,
    step: [],
    totalSuccess: 0,
    totalUnSuccess: 0,
}

export const playGroundSlice = createSlice({
    name: 'playground',
    initialState,
    reducers: {
        setCurrentStep: (state) => {
            state.currentStep += 1
        },
        setSteps: (state) => {
            const randomKeys = Math.floor(Math.random() * ARR_ARROW_CODES.length)
            state.step.push({
                currentStep: ARR_ARROW_CODES[randomKeys],
                enteredValue: null,
                success: null
            })
        },
        setEnteredValue: (state, action) => {
            const step =  state.step[state.currentStep -1];
            const isSuccess = step.currentStep === action.payload;

            if(step.enteredValue === null){
                state.step[state.currentStep -1] = {
                    ...step,
                    enteredValue: action.payload,
                    success: isSuccess
                }
            }

            if(isSuccess){
                state.totalSuccess +=1
            }else{
                state.totalUnSuccess +=1
                state.totalSuccess = 0
            }
        },
        setUnSuccess: (state) => {
            if(state.step.length){
                const step =  state.step[state.currentStep -1];
                if(step.success == null){
                    state.totalUnSuccess +=1
                    state.totalSuccess = 0
                    state.step[state.currentStep -1] = {
                        ...step,
                        success: false
                    }
                }
            }
        },
        setReset: () => initialState

    }
})

export const {setCurrentStep, setSteps, setEnteredValue, setUnSuccess, setReset} = playGroundSlice.actions
export default playGroundSlice.reducer