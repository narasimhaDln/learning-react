import {
  FETCH_COFFEE_FAILURE,
  FETCH_COFFEE_REQUEST,
  FETCH_COFFEE_SUCCESS,
  SET_SORT_ORDER,
} from "./actionTypes";

const initialState = {
  coffeeData: [],
  loading: false,
  error: "",
  setOrder: "asc",
};

export const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COFFEE_REQUEST:
      return { ...state, loading: true };
    case FETCH_COFFEE_SUCCESS:
      return {
        ...state,
        loading: false,
        coffeeData: action.payload.data || action.payload,
        error: "",
      };
    case FETCH_COFFEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        coffeeData: [],
      };
    case SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    default:
      return state;
  }
};
