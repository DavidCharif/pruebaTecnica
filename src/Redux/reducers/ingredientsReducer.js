import { ingredientTypes } from "../types/ingredientTypes"

const initialStateProducts = []

export const ingredientsReducer = (state = initialStateProducts, action) => {
  switch(action.type){
    case ingredientTypes.add:
      return action.payload
    case ingredientTypes.search:
      return action.payload
    default:
      return state
  }
}