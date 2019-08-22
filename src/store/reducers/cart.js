import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CART_SUCCESS:
      return {
        ...state,
        items: action.items
      };
    default:
      return state;
  }
};

export default reducer;
