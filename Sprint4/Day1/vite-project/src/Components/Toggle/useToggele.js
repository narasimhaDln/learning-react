import { useState } from "react";
function useToggle(initialState) {
  const [state, setState] = useState(initialState);
  const toggle = () => {
    if (state === "B") {
      setState("C");
    } else if (state === "C") {
      setState("D");
    } else if (state === "D") {
      setState("A");
    } else if (state === "A") {
      setState("B");
    } else {
      setState("B"); //default
    }
  };
  return [state, toggle];
}

export default useToggle;
