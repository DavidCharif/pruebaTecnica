import { shoppingTypes } from "../types/shoppingTypes";

const initialState = [];

export const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case shoppingTypes.addItem:
      return [...state, action.payload];
    case shoppingTypes.removeItem:
      return state.filter((item) => item !== action.payload);
    case shoppingTypes.addAllItems:
      return action.payload;
    case shoppingTypes.removeAllItems:
      return [];
    // case shoppingTypes.updateItem:
    //   let index = action.payload.index
    //   let copyState = state
    //   copyState[index] = action.payload.ingredient
    //   return copyState
    default:
      return state;
  }
};
