import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './component/GY_Nav';
import MovieList from './component/MovieList.jsx';
import SearchBar from './component/SearchBar';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const accessToken = localStorage.getItem("access")
    if (accessToken) {
      setIsLoggedIn(true);
    }
}, []);

  return (
    <p>Hello</p>
  )
}

export default App;
