import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import Login from './user/login';
//import Register from './user/register';

const router = createBrowserRouter([
  {
    path: "/",
    //element: <Login/>,
    //element: <Register/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />,
    <App />
  </React.StrictMode>,
  
)
