import { productTypes } from "../types/productTypes"

export const productAddAction = (productos) => {
  return {
    type: productTypes.add,
    payload: productos
  }
}