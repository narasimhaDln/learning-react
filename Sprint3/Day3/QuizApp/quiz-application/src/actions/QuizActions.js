export const FETCH_QUIZ_REQUEST = " FETCH_QUIZ_REQUEST";
export const FETCH_QUIZ_SUCCESS = "FETCH_QUIZ_SUCCESS";
export const FETCH_QUIZ_FAILURE = " FETCH_QUIZ_FAILURE";
export const SUBMIT_ANSWER = " SUBMIT_ANSWER";
export const SKIP_QUESTION = "SKIP_QUESTION";
import axios from "axios";
export const fetchQuiz = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_QUIZ_REQUEST });
    try {
      const res = await axios.get(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
      );
      dispatch({ type: FETCH_QUIZ_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: FETCH_QUIZ_FAILURE, payload: error.message });
    }
  };
};

export const submitAnswer = (answer) => {
  return {
    type: SUBMIT_ANSWER,
    payload: answer,
  };
};
export const skipQuestion = () => {
  return {
    type: SKIP_QUESTION,
  };
};
