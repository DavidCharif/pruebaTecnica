import { ingredientTypes } from "../types/ingredientTypes"


export const ingredientsAddAction = (productos) => {
  return {
    type: ingredientTypes.add,
    payload: productos
  }
}