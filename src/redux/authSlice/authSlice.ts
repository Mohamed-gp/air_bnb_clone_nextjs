"use client";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // user: typeof localStorage && localStorage.getItem("user")
    //   ? JSON.parse(localStorage.getItem("user") as string)
    //   : null,
  },
  reducers: {
    // login(state, action) {
    //   localStorage.setItem("user", JSON.stringify(action.payload));
    //   state.user = action.payload;
    // },
    // register(state, action) {
    //   localStorage.setItem("user", JSON.stringify(action.payload));
    //   state.user = action.payload;
    // },
    // logout(state) {
    //   state.user = null;
    //   localStorage.removeItem("user");
    // },
  },
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export { authActions, authReducer };
