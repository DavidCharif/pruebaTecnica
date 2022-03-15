import { carritoTypes } from "../types/carritoTypes"

const initialState = []

export const carritoReducer = (state=initialState, action) => {
  switch(action.type){
    case carritoTypes.addCarrito:
      return [
        ...state, 
        action.payload
      ]
    default:
      return state
  }
}