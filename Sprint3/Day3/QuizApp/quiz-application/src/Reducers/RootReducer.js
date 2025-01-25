import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import quizReducer from "./QuizReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
});
