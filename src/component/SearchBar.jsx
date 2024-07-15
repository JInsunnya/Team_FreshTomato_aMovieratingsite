// src/component/SearchBar.jsx
import React, { useState } from 'react';
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  padding: 10px 0px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 20px 10px 20px;
  font-size: 1rem;
  border: 1px solid #ea8b8b;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(96, 58, 58, 0.1);

  &:focus {
    outline: none;
    border-color: #1bb423;
    box-shadow: 0 2px 4px rgb(1, 185, 75);
  }
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://freshtomato.store/Movie/search/${searchQuery}/`,
        {timeout: 8000}
      );
      setSearchResults(response.data);
      setLoading(false);
    } catch (error) {
        if (axios.isCancel(error)) {
            console.log("요청 취소:", error.message);
          } else if (error.response) {
            console.error("서버 응답 오류:", error.response.data);
            setError(error.response.data);
          } else if (error.request) {
            console.error("요청 오류:", error.request);
          } else {
            console.error("오류 발생:", error.message);
          }
          setLoading(false);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container>
      <SearchInput
        type="search"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={handleChange}
        className="search_input"
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title_kor}</h2>
            <p>{movie.title_eng}</p>
            <img src={movie.poster_url} alt={movie.title_kor} style={{ maxWidth: '100px' }} />
            <p>Rating: {movie.rating}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default SearchBar;
