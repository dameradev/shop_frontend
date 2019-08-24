import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: [],
  addedItems: [],
  foods: [],
  total: 0
};

const reducer = (state = initialState, action) => {
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
    case actionTypes.FETCH_CART_SUCCESS:
      return {
        ...state,
        items: action.items
      };
    case actionTypes.ADD_TO_CART:
      let addedItem = state.foods.find(item => item._id === action.id);

      //check if the action id exists in the addedItems
      let existed_item = state.addedItems.find(item => action.id === item._id);
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price
        };
      } else {
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal
        };
      }
    case actionTypes.ADD_QUANTITY:
      let updatedItem = state.addedItems.find(item => item._id === action.id);

      updatedItem.quantity += 1;
      let newTotal = state.total + updatedItem.price;
      return {
        ...state,
        total: newTotal
      };
    case actionTypes.REMOVE_QUANTITY:
      let removedItem = state.addedItems.find(item => item._id === action.id);
      //if the qt == 0 then it should be removed
      if (removedItem.quantity === 1) {
        let new_items = state.addedItems.filter(item => item._id !== action.id);
        let newTotal = state.total - removedItem.price;
        return {
          ...state,
          addedItems: new_items,
          total: newTotal
        };
      } else {
        removedItem.quantity -= 1;
        let newTotal = state.total - removedItem.price;
        return {
          ...state,
          total: newTotal
        };
      }
    default:
      return state;
  }
};

export default reducer;
