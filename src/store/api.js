import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction(
  "api/callBegan",
  function prepare(url, onSuccess, method = "get", data = {}) {
    return {
      payload: {
        url: url,
        method: method,
        data: data,
        onSuccess: onSuccess,
      },
    };
  }
);
export const apiCallSuccess = createAction("api/callSuccess");
