import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import productToCartReducer from "./productToCartReducer";

// gộp các reducer lại với nhau
const rootReducer = combineReducers({
  counter: counterReducer, // reducer counter
  cart: productToCartReducer, // reducer cart
});

export default rootReducer;
