import axios from "axios";
import { useState } from "react";
import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";

function Fetchdata() {
  const API_KEY = "354f8bf";
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
    setMovies(res.data.Search || []);
  };

  const handleMovieClick = async (imdbID) => {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`);
    setSelectedMovie(res.data);
  };

  const handleBackToResults = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for a movie"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBack={handleBackToResults} />
      ) : (
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
      )}
    </div>
  );
}

export default Fetchdata;
