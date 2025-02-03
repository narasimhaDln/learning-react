import React from 'react'

const Todo=React.memo(({todo,toggleStatus,deleteTodo})=>{
    console.log("rendering todo",todo.id)
    return(
        <div style={{border:"1px solid black",backgroundColor:"aliceblue"}}>
      <span>{todo.task}</span>
      <button style={{backgroundColor:"green",margin:"10px",padding:"10px"}}onClick={()=>toggleStatus(todo.id)}>{todo.completed?"Undo":"completed"}</button>
      <button style={{backgroundColor:"red",padding:"10px"}}onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </div>
    )
})
export default Todo