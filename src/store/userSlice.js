import { createSlice } from "@reduxjs/toolkit";
import { METHOD_GET, METHOD_POST } from "./http";
import { apiCallBegan } from "./api";

const GET_USERS_URL = "api/get-profile";
const UPDATE_USER_PROFILE = "api/update-profile";

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
      user.country = action.payload.country;
    },
    userDetail: (user, action) => {
      const { data } = action.payload;
      user.email = data.email;
      user.name = data.name;
      user.mobile = data.mobile;
      user.city = data.city;
      user.state = data.state;
      user.company = data.company;
      user.country = data.country;
    },
  },
});

export const { userUpdated, userDetail } = userDetailSlice.actions;
export default userDetailSlice.reducer;

export const updateUser = (data, token) => {
  return apiCallBegan(
    `${UPDATE_USER_PROFILE}?token=${token}`,
    userUpdated.type,
    METHOD_POST,
    { ...data, country: 1, state: "MP" }
  );
};

export const userDetailed = (token) =>
  apiCallBegan(`${GET_USERS_URL}?token=${token}`, userDetail.type, METHOD_GET);
