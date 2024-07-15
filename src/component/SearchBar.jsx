// src/component/SearchBar.jsx
import React from 'react';
import styled from "styled-components";


const Container = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const SearchInput = styled.input`
    width: 50%;
    padding: 20px 10px 20px 10px;
    font-size: 1rem;
    border: 1px solid #ea8b8b;
    border-radius : 4px;
    box-shadow: 0 2px 4px rgba(96, 58, 58, 0.1);

    &:focus{
        outline:none;
        border-color: #1bb423;
        box-shadow:  0 2px 4 px rgb(1, 185, 75);
    }
    
    `;


const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <Container>
    <SearchInput
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="search_input"
      />
    </Container>
  );
};

export default SearchBar;