import {
  ADD_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  MARK_AS_READ,
  SET_FILTER,
} from "./actions";

const initialState = {
  books: [],
  author: "",
  genre: "",
  readStatus: "",
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.payload],
      };
    case EDIT_BOOK:
      return {
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };

    case DELETE_BOOK:
      return {
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case MARK_AS_READ:
      return {
        books: state.books.map((book) =>
          book.id === action.payload ? { ...book, read: true } : book
        ),
      };
    case SET_FILTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default bookReducer;
