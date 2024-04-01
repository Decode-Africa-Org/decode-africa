import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  userData: null,
  isLoading: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.userData = action.payload.userData;
      state.isLoading = false;
      state.error = null;
      localStorage.setItem("token", state.token);
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});
export const { loginSuccess, loginFailure, setToken } = authSlice.actions;
export default authSlice.reducer;
