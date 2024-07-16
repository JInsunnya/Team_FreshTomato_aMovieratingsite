import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  justify-items: center;
  margin-top: 20px;
`;

const MovieItem = styled.div`
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

const SearchResultsPage = () => {
  const { movieName } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiCall = axios.create({
    baseURL: 'https://freshtomato.store/',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log(`Fetching data for: ${movieName}`);
        const response = await apiCall.get(
          `/Movie/search/${movieName}/`,
          { timeout: 8000 }
        );
        setSearchResults(response.data);
        setLoading(false);
      } catch (error) {
        console.error('에러 발생:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [movieName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }

  if (searchResults.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div>
      <MovieListContainer>
        {searchResults.map((movie) => (
          <MovieItem key={movie.id}>
            <MovieTitle>{movie.title_kor}</MovieTitle>
            <MovieImage src={movie.poster_url} alt={movie.title_kor} />
            <p>{movie.title_eng}</p>
            <p>Rating: {movie.rating}</p>
          </MovieItem>
        ))}
      </MovieListContainer>
    </div>
  );
};

export default SearchResultsPage;
