import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      window.localStorage.setItem("auth", state.isAuthenticated);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      window.localStorage.setItem("auth", state.isAuthenticated);
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
