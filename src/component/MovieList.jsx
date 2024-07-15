// src/components/MovieList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://port-0-minihackathon-12-lyec0qpi97716ac6.sel5.cloudtype.app/movie/list')
      .then(response => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("에러 있음!!", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>에러명: {error.message}</div>;
  }

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title_kor}</h2>
            <img src={movie.poster_url} alt={movie.title_kor} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
