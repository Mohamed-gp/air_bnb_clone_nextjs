import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
    },
    reducers : {
        login(state,action){

        },
        register(state,action){

        }
    }
})


const authActions = authSlice.actions
const authReducer = authSlice.reducer   


export {authActions,authReducer}