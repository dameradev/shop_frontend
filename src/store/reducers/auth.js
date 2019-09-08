import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  email: null,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        userId: action.userId,
        email: action.authData.email,
        name: action.authData.name,
        token: action.token
      };
    default:
      return state;
  }
};

export default reducer;
