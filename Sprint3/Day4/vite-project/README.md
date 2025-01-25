# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import { useReducer } from 'react';
import './App.css';
const initialState = {
val1: "",
val2: "",
operator: "",
result: ""
};
const dataReducer = (state, action) => {
switch (action.type) {
case "SET_VAL1":
return {
...state,
val1: action.payload,
};
case "SET_VAL2":
return {
...state,
val2: action.payload,
};
case "SET_OPERATOR":
return {
...state,
operator: action.payload,
};
case "SET_CALCULATE":
let result = "";
switch (state.operator) {
case "+":
result = parseFloat(state.val1) + parseFloat(state.val2);
break;
case "-":
result = parseFloat(state.val1) - parseFloat(state.val2);
break;
case "_":
result = parseFloat(state.val1) _ parseFloat(state.val2);
break;
default:
return state;
}
return { ...state, result: result };
default:
return state;
}
};
function App() {
const [state, dispatch] = useReducer(dataReducer, initialState);

return (
<div>
<input
type="number"
onChange={(e) => dispatch({ type: "SET_VAL1", payload: e.target.value })}
placeholder="Value 1"
/>
<select
onChange={(e) => dispatch({ type: "SET_OPERATOR", payload: e.target.value })} >
<option value="+">+</option>
<option value="-">-</option>
<option value="*">\*</option>
</select>
<input
type="number"
onChange={(e) => dispatch({ type: "SET_VAL2", payload: e.target.value })}
placeholder="Value 2"
/>
<button onClick={() => dispatch({ type: "SET_CALCULATE" })}>
Calculate
</button>
<p>Result: {state.result}</p>
</div>
);
}

export default App;

<!--  -->
