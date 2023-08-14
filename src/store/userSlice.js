import { createSlice } from "@reduxjs/toolkit";
import { METHOD_GET, METHOD_PUT } from "./http";
import { apiCallBegan } from "./api";

const GET_USERS_URL = "api/get-profile";

const initialState = {
  email: "",
  name: "",
  mobileNumber: "",
  city: "",
  state: "",
  company: "",
};

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    userUpdated: (user, action) => {
      user.email = action.payload.email;
      user.name = action.payload.name;
      user.mobile = action.payload.mobile;
      user.city = action.payload.city;
      user.state = action.payload.state;
      user.company = action.payload.company;
    },
    userDetail: (user, action) => {
      const { data } = action.payload;
      user.email = data.email;
      user.name = data.name;
      user.mobile = data.mobile;
      user.city = data.city;
      user.state = data.state;
      user.company = data.company;
    },
  },
});

export const { userUpdated, userDetail } = userDetailSlice.actions;
export default userDetailSlice.reducer;

export const updateUser = (data) =>
  apiCallBegan(`${GET_USERS_URL}`, userUpdated.type, METHOD_PUT, data);

export const userDetailed = (token) =>
  apiCallBegan(`${GET_USERS_URL}?token=${token}`, userDetail.type, METHOD_GET);
