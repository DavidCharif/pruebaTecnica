import { ingredientTypes } from "../types/ingredientTypes";

const initialStateProducts = [];

export const ingredientsReducer = (state = initialStateProducts, action) => {
  switch (action.type) {
    case ingredientTypes.add:
      return action.payload;
    case ingredientTypes.search:
      return action.payload;
    case ingredientTypes.update:
      let index = action.payload.index;
      let copyState = state;
      copyState.ingredients[index] = action.payload.ingredient;
      return copyState;
    default:
      return state;
  }
};
