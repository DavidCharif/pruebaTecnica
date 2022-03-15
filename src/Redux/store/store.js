import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { carritoReducer } from "../reducers/carritoReducer";
import { loginReducer } from "../reducers/loginReducers";
import { productsReducer } from "../reducers/productsReducer";
import { registerReducer } from "../reducers/registerReducer";
import { viewProductsReducers } from "../reducers/viewProductsReducer";
import thunk from 'redux-thunk';
import { registerLocalReducer } from "../reducers/registerLocalReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  registerLocal: registerLocalReducer
 
})

export const store = createStore(reducers,composeEnhancers( 
  applyMiddleware(thunk)))