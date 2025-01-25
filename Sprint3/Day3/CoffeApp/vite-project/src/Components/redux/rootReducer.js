import { combineReducers } from "redux";
import { coffeeReducer } from "./reducer";

export const rootReducer = combineReducers({
  coffee: coffeeReducer,
});
