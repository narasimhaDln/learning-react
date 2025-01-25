import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./actionTypes";
import axios from "axios";
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

///thunk action to fetch data
//https://jsonplaceholder.typicode.com/todos
export const fetchData = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      dispatch(fetchDataSuccess(res.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
