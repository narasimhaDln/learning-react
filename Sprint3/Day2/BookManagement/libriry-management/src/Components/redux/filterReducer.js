import { SET_FILTER } from "./actions";

const initialState = {
  author: "",
  genre: "",
  readStatus: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default filterReducer;
