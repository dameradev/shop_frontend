import * as actionTypes from "../actions/actionTypes";

const intitalState = {
  foods: [],
  loading: false
};

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FOOD_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_FOOD_SUCCESS:
      return {
        ...state,
        foods: action.foods,
        loading: false
      };
    case actionTypes.FETCH_FOOD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
