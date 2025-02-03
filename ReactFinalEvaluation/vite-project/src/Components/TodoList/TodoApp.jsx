import { useCallback, useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import Todo from "./Todo";

const heavyTask=()=>{
    let start=Date.now();
    while(Date.now()-start<400){
        continue;
    }
}
function TodoApp() {
   const[todos,setTodos]=useState([]);
   const addTodo=useCallback(
      (task)=>{
        const newTodo={id:Date.now(),task,completed:false};
        setTodos((prevTodos)=>[...prevTodos,newTodo])
    },[] );
 //toggle todo;
 const toggleStatus=useCallback((id)=>{
      setTodos((prevTodos)=>prevTodos.map((todo)=>
    todo.id===id?{...todo,completed:!todo.completed}:todo))
 },[])
 //delete todo;
 const deleteTodo=useCallback((id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
 },[])
 //doing heavy calculation while todo change;
 useEffect(()=>{
todos.forEach(()=>{
    heavyTask();
},[todos])
 })
    
  return (
    <div>
       <TodoInput addTodo={addTodo}/>
       <div>
        {todos.map((todo)=>(
            <Todo key={todo.id} todo={todo} toggleStatus={toggleStatus} deleteTodo={deleteTodo}/>
        ))}
       </div>
    </div>
  )
}


export default TodoApp