import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from "./SearchBar"

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

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  height: 100vh; /* 화면 전체 높이를 사용할 경우 */
  text-align: center; /* 내용 가운데 정렬 */
`

const ErrorText = styled.h1`
  color: Tomato;

`
const SearchResultsPage = () => {
  const { movieName } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const apiCall = axios.create({
    baseURL: 'https://freshtomato.store/',
  })

  const handleSearch = (query) => {
    navigate(`/search/${query}`);
  };

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

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
    return <ErrorContainer>
      <ErrorText>Loading...</ErrorText>
      </ErrorContainer>;
  }

  if (error) {
    return <div>
      <SearchBar onSearch = {handleSearch}/>
      <ErrorContainer>
        <ErrorText>에러 발생: {error.message};</ErrorText>
      </ErrorContainer>
    </div>
    
  }

  if (searchResults.length === 0) {
    return <div>
      <br/><br/>
      <SearchBar onSearch = {handleSearch}/>
      <ErrorContainer>
      <ErrorText>No movies found.</ErrorText>
      </ErrorContainer>
      </div>;
  }

  return (
    <div>
      <SearchBar onSearch = {handleSearch}/> {/* searchbar 추가하기*/}
      <MovieListContainer>
        {searchResults.map((movie) => (
          <MovieItem key={movie.id} onClick = {() => handleClick(movie.id)}>
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
