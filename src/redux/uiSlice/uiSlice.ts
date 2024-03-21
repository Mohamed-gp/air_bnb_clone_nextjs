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
  CategoryLogoClick: false,
  airBnbYourHome: airBnbYouHomeType.default,
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
    setCategoryLogoClick(state, action) {
      state.CategoryLogoClick = action.payload;
    },
    setAirBnbYourHomeType(state, action) {
      if (action.payload == "Next") {
        state.airBnbYourHome = state.airBnbYourHome + 1;
      }
      if (action.payload == "Back") {
        state.airBnbYourHome = state.airBnbYourHome - 1;
      }
      if (action.payload == "Zero") {
        state.airBnbYourHome = 0;
      }
      if (action.payload == "Remove") {
        state.airBnbYourHome = -1;
      }
    },
  },
});

const uiActions = uiSlice.actions;
const uiReducer = uiSlice.reducer;

export { uiActions, uiReducer };
