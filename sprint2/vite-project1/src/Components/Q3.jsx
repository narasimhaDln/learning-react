import { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  useEffect(() => {}, [count]);
  return (
    <div>
      <button onClick={Increment}>Increment</button>
      <h1>{count}</h1>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}
export default Counter;
