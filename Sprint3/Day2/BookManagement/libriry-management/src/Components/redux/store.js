import { combineReducers, createStore } from "redux";
import bookReducer from "./reducer";
import filterReducer from "./filterReducer";
const rootReducers = combineReducers({
  books: bookReducer,
  filters: filterReducer,
});
export const store = createStore(rootReducers);
