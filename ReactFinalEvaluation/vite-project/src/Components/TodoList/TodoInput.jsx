import { useState } from "react"
function TodoInput({addTodo}) {
    const [task,setTask]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(task.trim()){
            addTodo(task);
            setTask("")
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
              <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}
              placeholder="enter the task"
              />
              <button style={{backgroundColor:"blue",padding:'10px'}} type="Submit">ADD</button>
        </form>
    </div>
  )
}

export default TodoInput