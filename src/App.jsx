import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./component/GY_Nav";
import MovieList from './component/MovieList.jsx';


function App() {
  return (
    <>
    <BrowserRouter>
    <div className = "nav_bar">
        <Nav/>
      </div>
      <MovieList/>
    </BrowserRouter>
    </>
  )
}

export default App;