import {useState} from "react";
import { SET_SEARCH_TERM } from "./redux3/actions";

function SearchBar({dispatch}) {
    const[searchTerm,setSearchTerm]=useState("")
    const handleSearch=(e)=>{
        setSearchTerm(e.target.value)
        dispatch({type:SET_SEARCH_TERM,payload:e.target.value});
    };
  return (
    <input type="text" value={searchTerm}
    onChange={handleSearch}
    placeholder="search matches"
    />
  )
}

export default SearchBar