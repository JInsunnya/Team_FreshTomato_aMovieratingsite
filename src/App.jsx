import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './component/GY_Nav';
import MovieList from './component/MovieList.jsx';
import SearchBar from './component/SearchBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="nav_bar">
          <Nav />
        </div>
        <div className="search_bar">
          <SearchBar placeholder="EX: 인사이드아웃2" />
        </div>
        <MovieList />
      </BrowserRouter>
    </>
  );
}

export default App;
