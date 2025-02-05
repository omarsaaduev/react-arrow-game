import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import playGround from "./slices/playGround";

export const store = configureStore({
    reducer: {
        playGround
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>