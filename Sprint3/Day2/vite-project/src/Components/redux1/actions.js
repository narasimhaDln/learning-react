import { DECREMENT, INCREMENT, RESET } from "./actionTypes";

export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
export const reset = () => ({
  type: RESET,
});
