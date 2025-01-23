export const ADD_BOOK = "ADD_BOOK";
export const EDIT_BOOK = "EDIT_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";
export const MARK_AS_READ = "MARK_AS_READ";
export const SET_FILTER = "SET_FILTER";

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});
export const editBook = (book) => ({
  type: EDIT_BOOK,
  payload: book,
});
export const deleteBook = (bookId) => ({
  type: DELETE_BOOK,
  payload: bookId,
});
export const markAsRead = (bookId) => ({
  type: MARK_AS_READ,
  payload: bookId,
});
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
