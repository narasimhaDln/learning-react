import axios from "axios";
import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./actionTypes";
const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};
const fetchPostSuccess = (data) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data,
  };
};
const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

//using thunk fetch the data;
export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchPostRequest());
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      dispatch(fetchPostSuccess(res.data));
    } catch (error) {
      dispatch(fetchPostFailure(error.message));
    }
  };
};
