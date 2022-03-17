import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import {  shoppingReducer } from "../reducers/shoppingReducer";
import { loginReducer } from "../reducers/loginReducers";
import { ingredientsReducer } from "../reducers/ingredientsReducer";
import { registerReducer } from "../reducers/registerReducer";
import thunk from 'redux-thunk';
import { registerLocalReducer } from "../reducers/registerLocalReducer";
import { quantityItemReducer } from "../reducers/quantityItemReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  registerLocal: registerLocalReducer,
  ingredients: ingredientsReducer,
  shoppingCart: shoppingReducer,
  quantityItems: quantityItemReducer
 })

export const store = createStore(reducers,composeEnhancers( 
  applyMiddleware(thunk)))