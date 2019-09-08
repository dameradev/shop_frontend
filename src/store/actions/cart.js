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

export const addToCart = (id, userId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    id,
    userId
  };
};

export const addQuantity = id => {
  return {
    type: actionTypes.ADD_QUANTITY,
    id
  };
};

export const removeQuantity = id => {
  return {
    type: actionTypes.REMOVE_QUANTITY,
    id
  };
};

export const postAddToCart = (foodId, userId, restaurantId) => {
  console.log(foodId, userId);

  const cartData = { foodId, userId, restaurantId };
  return dispatch => {
    axios
      .post("shop/add-to-cart", cartData)
      .then(response => {
        return dispatch(fetchCartSuccess(response.data));
      })
      .then(data => {
        console.log(data);
        dispatch(addToCart(foodId, userId, restaurantId));
      });
  };
};
