import * as actionTypes from "./actionTypes";
import axios from "../../apis/shopBackend";

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get("shop/orders")
      .then(response => {
        dispatch(fetchOrdersSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchOrdersFail(error));
      });
  };
};

export const postOrder = () => {};
