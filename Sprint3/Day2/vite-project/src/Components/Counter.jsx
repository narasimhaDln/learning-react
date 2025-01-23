import {useDispatch,useSelector} from "react-redux"
import { increment, reset,decrement } from './redux1/actions';
function Counter() {
const dispatch=useDispatch()
const count=useSelector((state)=>state.value)
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default Counter 