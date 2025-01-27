import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "354f8bf";

function MovieDetails({ movie, onBack }) {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`);
      setMovieDetails(res.data);
    };
    fetchDetails();
  }, [movie.imdbID]);

  if (!movieDetails) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={onBack}>Back to Results</button>
      <h2>{movieDetails.Title}</h2>
      <p><strong>Year:</strong> {movieDetails.Year}</p>
      <p><strong>Genre:</strong> {movieDetails.Genre}</p>
      <p><strong>Director:</strong> {movieDetails.Director}</p>
      <p><strong>Plot:</strong> {movieDetails.Plot}</p>
      <img src={movieDetails.Poster} alt={`${movieDetails.Title} Poster`} />
    </div>
  );
}

export default MovieDetails;
