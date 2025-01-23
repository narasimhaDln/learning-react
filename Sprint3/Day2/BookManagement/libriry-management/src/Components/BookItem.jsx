import { useDispatch } from "react-redux"
import { deleteBook, markAsRead } from "./redux/actions"


function BookItem({book}) {
    const dispatch=useDispatch()
  return (
  <li>
    <h2>{book.title}</h2>
    <p>Author:{book.author}</p>
    <p>Genre:{book.genre}</p>
    <p>Status:{book.read ? "Read" : "Unread"}</p>
    <button onClick={()=>dispatch(markAsRead(book.id))}>Mark As Read</button>
    <button onClick={()=>dispatch(deleteBook(book.id))}>Delete</button>
  </li>
  )
}

export default BookItem