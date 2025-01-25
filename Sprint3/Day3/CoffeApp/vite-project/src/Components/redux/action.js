import {
  FETCH_COFFEE_FAILURE,
  FETCH_COFFEE_REQUEST,
  FETCH_COFFEE_SUCCESS,
  SET_SORT_ORDER,
} from "./actionTypes";
import axios from "axios";

export const fetchCoffeeRequest = () => {
  return {
    type: FETCH_COFFEE_REQUEST,
  };
};
export const fetchCoffeeSuccess = (data) => {
  return {
    type: FETCH_COFFEE_SUCCESS,
    payload: data,
  };
};
export const fetchCoffeeFailure = (error) => {
  return {
    type: FETCH_COFFEE_FAILURE,
    payload: error,
  };
};
export const setSortOrder = (order) => {
  return {
    type: SET_SORT_ORDER,
    payload: order,
  };
};
// api end point:https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee
export const fetchCoffee = (setOrder) => {
  return async (dispatch) => {
    dispatch(fetchCoffeeRequest());
    try {
      const res = await axios.get(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee"
      );
      let sortData = res.data;
      if (setOrder === "ase") {
        sortData.sort((a, b) => a.price - b.price);
      } else if (setOrder === "dsec") {
        sortData.sort((a, b) => b.price - a.price);
      }

      dispatch(fetchCoffeeSuccess(sortData));
    } catch (error) {
      dispatch(fetchCoffeeFailure(error.message));
    }
  };
};
