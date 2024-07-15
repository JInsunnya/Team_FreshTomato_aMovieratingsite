import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import Login from './user/login';
//import Register from './user/register';
import App from "./App"

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
