import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/AuthActions";

const initialState = {
  loading: false,
  user: null,
  error: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: "" };
    case LOGIN_FAILURE:
      return { ...state, loading: false, user: null, error: action.payload };
    default:
      return state;
  }
};
export default authReducer;
