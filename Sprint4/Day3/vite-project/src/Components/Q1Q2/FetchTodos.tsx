
import axios from "axios"
import { useEffect,useState } from "react";
interface Todo{
    userId:number,
    id:number,
    title:string,
    completed:boolean
}
function FetchTodos() {
    // api url=https://jsonplaceholder.typicode.com/todos
    const[data,setData]=useState<Todo[]>([]);
    const[error,setError]=useState<string |null>(null);
    const[loading,setLoading]=useState<boolean>(false)
    const displayTodos=async()=>{
        try{
            setLoading(true)
          const res=await axios.get("https://jsonplaceholder.typicode.com/todos");
          setData(res.data)
          setLoading(false)

        }
        catch(error){
            console.log("error",error)
            setError("fetch request fail")
        }
    }
    useEffect(()=>{
        displayTodos()
    },[])
    if(loading) return <h1>....Loading....</h1>
    if(error) return <p>{error}</p>
  return (
    <div>
        <h2>Fetching todos</h2>
      <ul>
      {data.map((todo)=>(
            <li key={todo.id}>
             {todo.title}-{todo.completed?"completed":"Not Completed"}
            </li>
        ))}
      </ul>

    </div>
  )
}

export default FetchTodos