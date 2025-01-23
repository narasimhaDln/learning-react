import { useDispatch } from "react-redux"
import { setFilter } from "./redux/actions";
function Filter() {
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        const {name,value}=e.target;
        dispatch(setFilter({[name]:value}))
    }
  return (
    <div>
        <input type="text" name="author" placeholder="filter by author" onChange={handleChange}/>
        <input type="text" name="gnre" placeholder="filter by genre" onChange={handleChange}/>
        <select name="readStatus" onChange={handleChange}>
            <option value="">Filter by status</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
        </select>
    </div>
  )
}

export default Filter