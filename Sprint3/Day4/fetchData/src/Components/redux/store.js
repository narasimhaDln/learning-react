import { rootReducer } from "./rootreducer";
import { thunk } from "redux-thunk";
import { applyMiddleware, legacy_createStore } from "redux";
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
