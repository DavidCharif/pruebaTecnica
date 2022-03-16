import { shoppingTypes } from "../types/shoppingTypes"

const initialState = []

export const shoppingReducer = (state=initialState, action) => {
  switch(action.type){
    case shoppingTypes.addItem:
      return [
        ...state, 
        action.payload
      ]
    case shoppingTypes.removeItem:
      return state.filter(item => item !== action.payload)
      
    default:
      return state
  }
}