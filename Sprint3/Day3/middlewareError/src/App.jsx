
import './App.css'
import DataComponent from './Components/DataComponent'
import { useReducer } from 'react';
const data={
  val1:"",
  val2:"",
  operator:"",
  result:""

}
const reducer=(state,action){
  switch(action.type){
    case "SET_vAL1":
      return{
        ...state,
        val1:action.payload,
      }
      case "SET_VAL2":
        return{
          ...state,val2:action.payload
        }
      case "SET_OPERATOR":
        return{
          ...state,
          val2:actio.payload
        }
      case "SET_CALCULATE":
           let result=""
          switch(data.operator){
            case "+":
              result=state.val1+state.val2
              break;
               
          case "-":
            result=state.val1-state.val2
            break;
          case "*":
            resullt=state.val1*state.val2
            break;

        }
      return {...state,result:result}
    default:
      return state 
  }
}



function App() {
const[state,dispatch]=useReducer(dataReducer,reducer)
  return (
      <div>
    <DataComponent/>
    <input type="number" onChange={(e)=>dispatch({type:"SET_vAL1",payload:e.target.value})}/>
    <select onChange={(e)=>dispatch({type:"SET_OPERATOR",payload:e.target.value})}>
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
    </select>
    <input type="number"  onChange={(e)=>dispatch({type:"SET_vAL2",payload:e.target.value})}/>
    <button onClick={(e)=>dispatch({type:"SET_CALCULATE"})}>Calculate</button>
      </div>
    
  )
}

export default App
