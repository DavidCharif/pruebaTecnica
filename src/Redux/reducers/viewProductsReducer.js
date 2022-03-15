import { viewProductsTypes } from "../types/viewProductsTypes"

const initialState = {
  main: '',
  miniatures : []
}


export const viewProductsReducers = (state = initialState, action) => {
  switch(action.type){
    case viewProductsTypes.addImage:
      return {
        main: action.payload.main,
        miniatures: action.payload.miniatures
      }
    case viewProductsTypes.changeMain:
        return {
          ...state, main: action.payload
        }
    default:
      return state
  }
}