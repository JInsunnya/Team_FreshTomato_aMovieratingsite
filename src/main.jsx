import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import styled from 'styled-components';

import Login from './user/login';
import Register from './user/register';
import Nav from './component/GY_Nav';
import MovieList from './component/MovieList';
import SearchBar from './component/SearchBar';
import Detail from './detail';

const TomatoBack = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

const TomatoLogo = styled.h1`
  color: tomato;
  font-size: 100px;
  font-weight: 600;
  //-webkit-text-stroke: 2px tomato;
  display: flex;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// 새로운 Home 컴포넌트 추가
const Home = () => {
  return (
    <div>
      <LogoContainer>
      <TomatoLogo> Fresh Tomato
      <img width="96" height="96" src="https://img.icons8.com/doodle/96/000000/tomato--v1.png" alt="tomato--v1"/>
      </TomatoLogo>
      </LogoContainer>
      <SearchBar placeholder="EX: 인사이드아웃2" />
      <MovieList />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <TomatoBack>
        <Nav />
      </TomatoBack>
    ),
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
      {
        path: '/detail/:id',
        element: <Detail/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
