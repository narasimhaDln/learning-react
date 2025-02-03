import { useState } from "react"

import { Input } from "@chakra-ui/react"
function SearchBar({onSearch}) {
    const[searchTerm,setSearchTerm]=useState("");
    const handleChange=(e)=>{
        setSearchTerm(e.target.value)
        onSearch(e.target.value)
    }
  return (
  <div>
      <input
    type="text"
    placeholder="search pokemon"
    value={searchTerm}
    onChange={handleChange}
    />
    
  </div>
  )
}

export default SearchBar