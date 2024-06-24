import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as any,
  },
  reducers: {
    setCredentials(state, action) {
      // localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    wishlistToggle(state, action) {
      const { listingId } = action.payload;
      if (state?.user?.favoriteIds?.indexOf(listingId) != -1) {
        state.user.favoriteIds = state.user.favoriteIds.filter((id : string) => id != listingId);
      } else {
        state.user.favoriteIds.push(listingId);
      }
    },
  },
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export { authActions, authReducer };
