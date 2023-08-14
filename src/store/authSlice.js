// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { METHOD_POST } from "./http";

// Endpoint
const LOGIN_URL = "api/login-member";

const initialState = {
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = true;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;

export const loginUser = (data) =>
  apiCallBegan(`${LOGIN_URL}`, loginSuccess.type, METHOD_POST, data);
