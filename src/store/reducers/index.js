import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

// gộp các reducer lại với nhau
const rootReducer = combineReducers({
    counter: counterReducer, // reducer counter
});

export default rootReducer;