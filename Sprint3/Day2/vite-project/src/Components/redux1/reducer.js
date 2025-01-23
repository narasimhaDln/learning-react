import { DECREMENT, INCREMENT, RESET } from "./actionTypes";

const initialValue = {
  value: 0,
};
export const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    case RESET:
      return {
        ...state,
        value: 0,
      };
    default:
      return state;
  }
};
