import { carritoTypes } from "../types/carritoTypes"

export const carritoAddAction = (productos) => {
  return {
    type: carritoTypes.addCarrito,
    payload : productos
  }
}