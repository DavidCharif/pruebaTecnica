import { shoppingTypes } from "../types/shoppingTypes"


export const shoppingAddAction = (productos) => {
  return {
    type: shoppingTypes.addItem,
    payload : productos
  }
}
export const shoppingRemoveAction = (productos) => {
  return {
    type: shoppingTypes.removeItem,
    payload : productos
  }
}