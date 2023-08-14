import { combineReducers } from "redux";
import authReducer from "./authSlice";
import userReducer from "./userSlice";

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default reducer;
