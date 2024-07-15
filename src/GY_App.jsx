import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from 'axios';

import Nav from "./component/GY_Nav";
import MovieList from './component/MovieList.jsx';
import Pagination from './component/pagination.jsx';
import { StyleSheetContext } from 'styled-components';

function App() {

  const [currentPage, setCurrentPage] = useState(0);
  const[pageCount, setPageCount] = useState(0);
  const [movies, setMovies] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get (`https://port-0-minihackathon-12-lyec0qpi97716ac6.sel5.cloudtype.app/movie/list?page=${currentPage + 1}`);
        console.log(response.data) // 
        setMovies(response.data.movies);
        setPageCount(Math.ceil(499 / itemsPerPage));
      } catch(error){
        console.error('에러내역:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = ({selected}) => {
    setCurrentPage(selected);
  };

  return (
    <>
    <BrowserRouter>
    <div className = "nav_bar">
        <Nav/>
      </div>
      <MovieList/>

      {pageCount > 0 && (
        <Pagination
          pageCount={Math.max(1, pageCount - 1)}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </BrowserRouter>
    </>
  )
}

export default App;
