import * as actionTypes from "./actionTypes";
import axios from "../../apis/shopBackend";

export const fetchFoodStart = () => {
  return { type: actionTypes.FETCH_FOOD_START };
};

export const fetchFoodSuccess = foods => {
  return {
    type: actionTypes.FETCH_FOOD_SUCCESS,
    foods
  };
};

export const fetchFoodFail = error => {
  return {
    type: actionTypes.FETCH_FOOD_FAIL,
    error
  };
};

export const fetchFoods = restId => {
  return dispatch => {
    axios
      .get("shop/foods/" + restId.id)
      .then(response => {
        dispatch(fetchFoodSuccess(response.data.foods));
      })
      .catch(error => {
        dispatch(fetchFoodFail(error));
      });
  };
};
