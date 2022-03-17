
import { quantityItemTypes } from "../types/quantityItemTypes";

const initialStateProducts = {};

export const quantityItemReducer = (state = initialStateProducts, action) => {
  switch (action.type) {
    case quantityItemTypes.changeQuantity:
      // console.log("state", state);
      const name = action.payload.name;
      const value = action.payload.value;
      let copy = {...state};
      console.log('copy', copy.name)
      Object.values(copy).map(item =>{
        if(item.name === name){
          item.items = parseInt(value)
        }
        return console.log('item', item)
      })
      

      return {
        ...copy,
      };

    case quantityItemTypes.addQuantity:
      console.log("action.payload", { ...action.payload });
      return action.payload;
    default:
      return state;
  }
};
