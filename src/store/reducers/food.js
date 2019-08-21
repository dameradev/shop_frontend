import * as actionTypes from "../actions/actionTypes";

const intitalState = {
  foods: []
};

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RESTAURANTS_START:
      return {
        ...state
      };
    case actionTypes.FETCH_FOOD_SUCCESS:
      return {
        ...state,
        foods: action.foods
      };
    case actionTypes.FETCH_FOOD_FAIL:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
