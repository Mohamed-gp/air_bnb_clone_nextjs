import { createSlice } from "@reduxjs/toolkit";

interface uiInitialStateType {
  registerModelIsOpen: boolean;
  loginModelIsOpen: boolean;
  menuIsOpen: boolean;
}

const uiInitialState: uiInitialStateType = {
  registerModelIsOpen: false,
  loginModelIsOpen: false,
  menuIsOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    toggleMenu(state, action) {
      state.menuIsOpen = !state.menuIsOpen;
    },
    setRegisterModelIsOpen(state, action: { payload: boolean }) {
      state.registerModelIsOpen = action.payload;
    },
    setLoginModelIsOpen(state, action: { payload: boolean }) {
      state.loginModelIsOpen = action.payload;
    },
  },
});

const uiActions = uiSlice.actions;
const uiReducer = uiSlice.reducer;

export { uiActions, uiReducer };
