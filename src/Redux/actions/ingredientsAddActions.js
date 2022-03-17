import { ingredientTypes } from "../types/ingredientTypes"


export const ingredientsAddAction = (productos) => {
  return {
    type: ingredientTypes.add,
    payload: productos
  }
}

export const actionUpdateItem = (index, ingredient) => {
  return {
    type: ingredientTypes.update,
    payload: {
      index, ingredient
    }
  }
}

