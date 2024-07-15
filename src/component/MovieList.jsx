import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const MovieItem = styled.div`
  width: 18%;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MovieTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detail/:id');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://port-0-minihackathon-12-lyec0qpi97716ac6.sel5.cloudtype.app/movie/list');
        let movieData = response.data;
        movieData = movieData.slice(0, 20);
        setMovies(movieData);
        setLoading(false);
      } catch (error) {
        console.error('에러 발생:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }

  if (movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div>
      <MovieListContainer>
        {movies.map((movie) => (
          <MovieItem key={movie.id}>
            <MovieTitle>{movie.title_kor}</MovieTitle>
            <MovieImage src={movie.poster_url} alt={movie.title_kor} />
          </MovieItem>
        ))}
      </MovieListContainer>
    </div>
  );
};

export default MovieList;
