import { useState } from "react";

const MovieList = ({ movies, onMovieClick }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedMovies = Array.isArray(movies) ? [...movies].sort((a, b) => {
    return sortOrder === 'asc' ? parseInt(a.Year) - parseInt(b.Year) : parseInt(b.Year) - parseInt(a.Year);
  }) : [];
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div>
      <select onChange={handleSortChange}>
        <option value="asc">Year (Ascending)</option>
        <option value="desc">Year (Descending)</option>
      </select>
      <ul>
        {sortedMovies.map((movie) => (
          <li key={movie.imdbID} onClick={() => onMovieClick(movie.imdbID)}>
            {movie.Title} ({movie.Year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
