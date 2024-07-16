import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top:20px;
`;
const MovieItem = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #5ebc69;
  background-color: #FFF4EF;
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


const PageNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;

  button {
    background-color: tomato;
    color: #FFF4EF;
    border-color: white;
    border-style: solid;
    border-radius: 30px;
    width: 100px;
    height: 60px;
    margin: 20px;
    font-size: 15px;
  }

  ul{
    margin: 5px;
    padding: 10px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #5c1204;
  }
`

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://freshtomato.store/Movie/home/${currentPage}/`
        );
        setMovies(response.data);
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
      <PageNav>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          &lt;&lt;  이전
        </button>
        <ul>{currentPage}</ul>
        <button onClick={handleNextPage}>다음  &gt;&gt;</button>
      </PageNav>
    </div>
  );
};
export default MovieList;