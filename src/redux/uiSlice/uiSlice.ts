import { airBnbYouHomeType } from "@/types/enums";
import { createSlice } from "@reduxjs/toolkit";

interface uiInitialStateType {
  registerModelIsOpen: boolean;
  loginModelIsOpen: boolean;
  menuIsOpen: boolean;
  CategoryLogoClick: boolean;
  airBnbYourHome: airBnbYouHomeType;
}

const uiInitialState: uiInitialStateType = {
  registerModelIsOpen: false,
  loginModelIsOpen: false,
  menuIsOpen: false,
  CategoryLogoClick : false,
  airBnbYourHome: airBnbYouHomeType.default
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
    setCategoryLogoClick(state,action) {
      state.CategoryLogoClick = action.payload
    },
    increaseAirBnbYouHomeType(state,action) {
      state.airBnbYourHome = state.airBnbYourHome + 1
    },
    decreaseAirBnbYouHomeType(state,action) {
      state.airBnbYourHome = state.airBnbYourHome - 1
    }
  },
});

const uiActions = uiSlice.actions;
const uiReducer = uiSlice.reducer;

export { uiActions, uiReducer };
