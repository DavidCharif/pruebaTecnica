import { shoppingTypes } from "../types/shoppingTypes";

export const shoppingAddAction = (productos) => {
  return {
    type: shoppingTypes.addItem,
    payload: productos,
  };
};
export const shoppingRemoveAction = (productos) => {
  return {
    type: shoppingTypes.removeItem,
    payload: productos,
  };
};

export const shoppingAddAllAction = (productos) => {
  return {
    type: shoppingTypes.addAllItems,
    payload: productos,
  };
};
export const shoppingRemoveAllAction = () => {
  return {
    type: shoppingTypes.removeAllItems,
  };
};
