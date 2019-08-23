import * as actionTypes from "./actionTypes";

import axios from "../../apis/shopBackend";

export const fetchCartSuccess = items => {
  return {
    type: actionTypes.FETCH_CART_SUCCESS,
    items
  };
};

export const fetchCart = () => {
  return dispatch => {
    axios.get("shop/status").then(response => {
      if (response.data) {
        dispatch(fetchCartSuccess(response.data.items));
      }
    });
  };
};

export const postAddToCartSuccess = items => {
  return {
    type: actionTypes.POST_ADD_TO_CART_SUCCESS,
    items
  };
};

export const postAddToCart = cartItems => {
  return dispatch => {
    dispatch(postAddToCartSuccess(cartItems));
  };
};

export const addToCart = id => {
  return {
    type: actionTypes.ADD_TO_CART,
    id
  };
};
