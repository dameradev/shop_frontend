import * as actionTypes from "./actionTypes";
import axios from "../../apis/shopBackend";

export const fetchRestaurantsStart = () => {
  return {
    type: actionTypes.FETCH_RESTAURANTS_START
  };
};

export const fetchRestaurantsSuccess = restaurants => {
  return {
    type: actionTypes.FETCH_RESTAURANTS_SUCCESS,
    restaurants
  };
};

export const fetchRestaurantsFail = error => {
  return {
    type: actionTypes.FETCH_RESTAURANTS_FAIL,
    error: error
  };
};

export const fetchRestaurants = () => {
  return dispatch => {
    axios
      .get("shop/restaurants")
      .then(response => {
        dispatch(fetchRestaurantsSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchRestaurantsFail(error));
      });
  };
};
