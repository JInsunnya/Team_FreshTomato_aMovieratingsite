// src/component/SearchBar.jsx
import React from 'react';
import styled from "styled-components";


const SearchInput = styled.input`
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius : 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);

    &:focus{
        outline:none;
        border-color: #007bff;
        box-shadow:  0 2px 4 px rgba(0, 123, 255, 0.25);
    }
    
    `;


const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <div>
    <SearchInput
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="search_input"
      />
    </div>
  );
};

export default SearchBar;