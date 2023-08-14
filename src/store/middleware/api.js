import axios from "axios";
import * as actions from "../api";

const api =
  ({ getState, dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    next(action);
    const { url, method, data, onSuccess } = action.payload;
    try {
      const response = await axios.request({
        baseURL: "http://165.22.223.163/polymermis/",
        url: url,
        method: method,
        data: data,
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      console.log("something went wrong");
    }
  };

export default api;
