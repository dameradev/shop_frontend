import * as actionTypes from "../actions/actionTypes";

const initialState = {
  foods: [],
  restaurants: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurants: action.restaurants
      };
    case actionTypes.FETCH_RESTAURANTS_FAIL:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
