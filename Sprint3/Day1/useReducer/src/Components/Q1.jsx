import { useReducer } from "react"
const initialValue=0;
const reducer=(state,action)=>{
     switch(action.type){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        case "reset":
            return initialValue;
        default:
            return state;
     }
}
function Counter(){
    const[count,dispatch]=useReducer(reducer,initialValue)
    return(
       <div>
        <h1>Count={count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>

       </div>
    )
}
export default Counter