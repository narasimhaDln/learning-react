import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./actionTypes";

const initialState = {
  post: [],
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return { ...state, loading: true };
    case FETCH_POST_SUCCESS:
      return { ...state, post: action.payload };
    case FETCH_POST_FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};
