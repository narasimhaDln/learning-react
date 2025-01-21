import { useReducer, useState } from "react";

const initialState = {
  todos: [],
  todoCount: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, id) => id !== action.id),
        todoCount: state.todoCount - 1
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, id) =>
          id === action.id ? { ...todo, text: action.newText } : todo
        )
      };
    default:
      return state;
  }
};

function Todo() {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, initialState);
  const [isEditing, setIsEditing] = useState(null);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing !== null) {
      dispatch({ type: "EDIT_TODO", id: isEditing, newText: text });
      setIsEditing(null);
    } else {
      dispatch({ type: "ADD_TODO", text });
    }
    setText("");
  };

  const handleEdit = (id, currentText) => {
    setIsEditing(id);
    setText(currentText);
  };

  return (
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
  );
}

export default Todo;
