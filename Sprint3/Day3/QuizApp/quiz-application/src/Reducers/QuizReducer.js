import {
  FETCH_QUIZ_FAILURE,
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  SKIP_QUESTION,
  SUBMIT_ANSWER,
} from "../actions/QuizActions";

const initialState = {
  loading: false,
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  error: null,
};
const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.payload,
        error: null,
      };
    case FETCH_QUIZ_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SUBMIT_ANSWER:
      return {
        ...state,
        score: state.score + (action.payload.correct ? 1 : 0),
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case SKIP_QUESTION:
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    default:
      return state;
  }
};
export default quizReducer;
