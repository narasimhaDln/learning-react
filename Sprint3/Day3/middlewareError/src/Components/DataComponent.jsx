import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "./redux/actions";

import { useEffect } from "react";
function DataComponent() {
  const dispatch=useDispatch();
  const {loading,data,error}=useSelector((state)=>state.data)
  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch]);
  console.log({loading,data,error})
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <table style={{border:"3px solid red"}}>
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>Status</th>
        </thead>
        <tbody style={{border:"3px solid red"}}>
      
            {data.map((item,id)=>(
              <tr key={item.id} style={{border:"3px solid red"}}>
              <td  style={{border:"3px solid teal"}}>{item.id}</td>
              <td style={{border:"3px solid pink"}}>{item.title}</td>
              <td style={{border:"3px solid yellow"}}>{item.completed?"yes":"no"}</td>
              </tr>
            ))}
          
        </tbody>
      </table>
   
   
  </div>
  )
}

export default DataComponent