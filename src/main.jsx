import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import App from './App';
import Login from './user/login';
import Register from './user/register';
import Nav from './component/GY_Nav';
import MovieList from './component/MovieList';

const router = createBrowserRouter([
  {
    path: "/",
    //element: <App/>,
    element: <Nav/>,
    children: [
      {
        element: <MovieList/>,
        index: true,
      },
      {
        path: "/Login",
        element:<Login/>,
      },
      {
        path: "/Signup",
        element:<Register/>,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
