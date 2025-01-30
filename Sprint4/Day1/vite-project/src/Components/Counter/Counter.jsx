import {useCounter} from "./useCounter"
function Counter() {
    const{count,increment,decrement,reset}=useCounter(0)
  return (
    <div>
        <h1>Conter with custom hooks</h1>
        <p>Count:{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter

