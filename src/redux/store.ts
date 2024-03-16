import {configureStore} from "@reduxjs/toolkit"
import { authReducer } from "./authSlice/authSlice"
import { uiReducer } from "./uiSlice/uiSlice"


const store = configureStore({
    reducer: {
        auth : authReducer,
        ui : uiReducer
    }
})


export {store}

export type IRootState = ReturnType<typeof store.getState>
