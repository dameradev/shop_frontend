import * as actionTypes from "../actions/actionTypes";

const initialState = {
  foods: [],
  restaurants: [],
  loading: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RESTAURANTS_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurants: action.restaurants,
        loading: false
      };
    case actionTypes.FETCH_RESTAURANTS_FAIL:
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
