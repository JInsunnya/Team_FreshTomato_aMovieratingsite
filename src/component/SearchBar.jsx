// src/component/SearchBar.jsx
import React, { useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import {useNavigate} from "react-router-dom";


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

const SearchClick = styled.button`
  background-color: #ea8b8b;
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  width: 80px;
  height: 60px;
`

const SearchClickContainer = styled.div`
  margin: 10px;`

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top:20px;
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


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery)}`);
      console.log(`Navigating to: /search/${encodedQuery}`);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container>
      <SearchInput
        type="search"
        placeholder="EX: 인사이드아웃2"
        value={searchQuery}
        onChange={handleChange}
        className="search_input"
      />
      
      <SearchClickContainer>
      <SearchClick onClick={handleSearch}>Search</SearchClick>
      </SearchClickContainer>
    
    </Container>
  );
};

export default SearchBar;
