
function Filters({dispatch}) {
    const handleFilterChange=(type,value)=>{
        dispatch({type:"SETFILTER",payload:{[type]:value}});
    }
  return (
    <div>
        <select onChange={(e)=>handleFilterChange("team",e.target.value)}>
            <option value="">select Team</option>
        </select>
        <select onChange={(e)=>handleFilterChange("date",e.target.value)}>
            <option value="">Select Date</option>
        </select>
        <select onChange={(e)=>handleFilterChange("outcome",e.target.value)}>
            <option value="">Select OutCome</option>
            <option value="win">Win</option>
            <option value="loss">Loss</option>
            <option value="draw">Draw</option>
        </select>
    </div>
  )
}

export default Filters