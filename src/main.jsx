import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Login from './user/login';
import Register from './user/register';
import Nav from './component/GY_Nav';
import MovieList from './component/MovieList';
import SearchBar from './component/SearchBar';

// 새로운 Home 컴포넌트 추가
const Home = () => {
  return (
    <div>
      <SearchBar placeholder="EX: 인사이드아웃2" />
      <MovieList />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <Home />, // Home 컴포넌트를 루트 경로에 렌더링
        index: true,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/Signup',
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
