import { productTypes } from "../types/productTypes"

const initialStateProducts = [{
  id: '',
  data: ''}
]

export const productsReducer = (state = initialStateProducts, action) => {
  switch(action.type){
    case productTypes.add:
      return action.payload
    case productTypes.search:
      return action.payload
    default:
      return state
  }
}