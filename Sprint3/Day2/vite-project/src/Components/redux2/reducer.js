import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actions";
const initialValue = {
  todos: [],
};
const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, id) => id !== action.id),
        todoCount: state.todoCount - 1,
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, id) =>
          id === action.id ? { ...todo, text: action.newText } : todo
        ),
      };
    default:
      return state;
  }
};
export default reducer;
