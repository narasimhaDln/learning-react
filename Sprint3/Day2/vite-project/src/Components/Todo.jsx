import { useState } from "react";
import { ADD_TODO, EDIT_TODO } from "./redux2/actions";
import { useDispatch, useSelector } from "react-redux";
function Todo() {
  const [isEditing, setIsEditing] = useState(null);
  const [text, setText] = useState("");
  const dispatch=useDispatch()
  const todos=useSelector((state)=>state.todos)
 const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing !== null) {
      dispatch({ type: EDIT_TODO, id: isEditing, newText: text });
      setIsEditing(null);
    } else {
      dispatch({ type: ADD_TODO, text });
    }
    setText("");
  };

  const handleEdit = (id, currentText) => {
    setIsEditing(id);
    setText(currentText);
  }
  return(
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">{isEditing !== null ? "Save" : "Add"}</button>
    </form>
    <ol>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.text}
          <button onClick={() => dispatch({ type: "DELETE_TODO", id: index })}>
            Delete
          </button>
          <button onClick={() => handleEdit(index, todo.text)}>Edit</button>
        </li>
      ))}
    </ol>
  </div>
  )
}
  export default Todo