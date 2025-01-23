import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector(state => state.books.books); 
  const filters = useSelector(state => state.filters);

  // Apply filters to books
  const filteredBooks = books.filter(book => {
    return (
      (!filters.author || book.author.includes(filters.author)) &&
      (!filters.genre || book.genre.includes(filters.genre)) &&
      (!filters.readStatus || book.read === (filters.readStatus === 'read'))
    );
  });

  return (
    <ul>
      {filteredBooks.map(book => (
        <BookItem key={book.id} book={book} /> 
      ))}
    </ul>
  );
};

export default BookList;
