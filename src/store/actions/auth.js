import * as actionTypes from "./actionTypes";
import axios from "../../apis/shopBackend";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (authData, token, id) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData,
    token,
    userId: id
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const auth = (email, password, name, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    console.log(isSignup, "IS SOG ");
    const authData = { name, email, password };
    let url = "/signup";
    if (!isSignup) {
      url = "/login";
    }
    axios
      .post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(authData, response.data.token, response.data.id));
      })
      .catch(error => dispatch(authFail(error)));
  };
};
