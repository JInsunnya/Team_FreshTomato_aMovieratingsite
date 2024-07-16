import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieItem = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  text-align: center;
`;

const MovieTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(20); // 한 페이지에 보여질 항목 수
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://freshtomato.store/');
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
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

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
          <MovieItem key={movie.id} onClick={() => handleClick(movie.id)}>
            <MovieTitle>{movie.title_kor}</MovieTitle>
            <MovieImage src={movie.poster_url} alt={movie.title_kor} />
          </MovieItem>
        ))}
      </MovieListContainer>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          이전 페이지
        </button>
        <button onClick={handleNextPage}>다음 페이지</button>
      </div>
    </div>
  );
};

export default MovieList;
