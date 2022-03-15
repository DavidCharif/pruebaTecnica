import { viewProductsTypes } from "../types/viewProductsTypes"

export const viewProductsChangeAction = (src) => {
  return {
    type: viewProductsTypes.changeMain,
    payload: src
  }
}