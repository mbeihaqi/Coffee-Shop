import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FoodMenu from './pages/FoodMenu';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Geloto from './pages/Geloto';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './components/About';
import Products from './components/Products';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/foodmenu",
    element: <FoodMenu/>,
  },
  {
    path: "/gelato",
    element: <Geloto/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/#coffee",
    element: <Products/>
  },
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
