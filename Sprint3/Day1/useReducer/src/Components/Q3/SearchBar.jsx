import {useState} from "react";

function SearchBar({dispatch}) {
    const[searchTerm,setSearchTerm]=useState("")
    const handleSearch=(e)=>{
        setSearchTerm(e.target.value)
        dispatch({type:"SET_SEARCH_TEAM",payload:e.target.value});
    };
  return (
    <input type="text" value={searchTerm}
    onChange={handleSearch}
    placeholder="search matches"
    />
  )
}

export default SearchBar