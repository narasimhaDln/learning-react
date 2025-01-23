
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addBook } from "./redux/actions";

function AddBookForm() {
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("");
    const [genre,setGenre]=useState("")
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
   e.preventDefault()
   const newBook={
    id:Date.now(),
    title:title,
    author:author,
    genre:genre,
    read:false
   }
   dispatch(addBook(newBook))
   setAuthor("")
   setGenre("")
   setTitle("")
}
  return (
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="enter title name"
    value={title} onChange={(e)=>setTitle(e.target.value)}
    />
    <input type="text" placeholder="enter Author"
    value={author} onChange={(e)=>setAuthor(e.target.value)}
    />
    <input type="text" placeholder="genre required"
    value={genre} onChange={(e)=>setGenre(e.target.value)}
    />
    <button type="submit">Add Book</button>
  </form>
  )
}

export default AddBookForm