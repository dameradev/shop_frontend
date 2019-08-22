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
    dispatch(fetchRestaurantsStart());
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

export const fetchRestaurantStart = () => {
  return {
    type: actionTypes.FETCH_RESTAURANT_START
  };
};

export const fetchRestaurantSuccess = restaurant => {
  return {
    type: actionTypes.FETCH_RESTAURANT_SUCCESS,
    restaurant
  };
};

export const fetchRestaurantFail = error => {
  return {
    type: actionTypes.FETCH_RESTAURANT_FAIL,
    error: error
  };
};

export const fetchRestaurant = resId => {
  return dispatch => {
    dispatch(fetchRestaurantStart());
    axios
      .get("shop/restaurants/" + resId.id)
      .then(response => {
        dispatch(fetchRestaurantSuccess(response.data));
      })
      .catch(err => dispatch(fetchRestaurantFail(err)));
  };
};
