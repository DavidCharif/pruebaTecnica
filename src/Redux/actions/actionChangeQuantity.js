import { quantityItemTypes } from "../types/quantityItemTypes";
import { shoppingTypes } from "../types/shoppingTypes";

export const actionChangeQuantity = (name, value) => {
  console.log("name, value", name, value);
  return {
    type: quantityItemTypes.changeQuantity,
    payload: {
      name,
      value,
    },
  };
};
export const actionChangeQuantityAdd = ({ingredients}) => {
  let initialState = {};
 
  ingredients.map((ingredient,index) => {
    const name = ingredient.product
    const items = ingredient.items    
    return initialState[index] = {name, items}
    });
  ;
  return {
    type: quantityItemTypes.addQuantity,
    payload:{...initialState},
  };
};
