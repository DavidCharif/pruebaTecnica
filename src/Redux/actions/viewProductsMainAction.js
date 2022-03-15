import { viewProductsTypes } from "../types/viewProductsTypes"

export const viewProductsMainAction = (main, resto) => {
  
  return {
    type: viewProductsTypes.addImage,
    payload: {
      main: main,
      miniatures : resto
    }
  }
}