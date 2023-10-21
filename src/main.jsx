import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home';

import Contact from './Pages/Contact';
import Login from './Users/Login';
import Register from './Users/Register';

import Error from './Pages/Error';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './Users/PrivateRoute';
import AddProducts from './Pages/AddProducts';
import MyCart from './Pages/MyCart';
import Nike from './Brands/Nike';
import Adidas from './Brands/Adidas';
import Gucci from './Brands/Gucci';
import Zara from './Brands/Zara';
import HugoBoss from './Brands/HugoBoss';
import Levis from './Brands/Levis';
import AllProducts from './Brands/AllProducts';
import ProductDetails from './Brands/ProductDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/events.json')
      },

      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

      {
        path: '/addproducts',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('http://localhost:3000/nike')
      },
      {
        path: '/allproducts',
        element: <AllProducts></AllProducts>,
        loader: () => fetch('http://localhost:3000/products')
      },
      {
        path: '/nike',
        element: <Nike></Nike>,
        loader: () => fetch('http://localhost:3000/products')
      },
      {
        path: '/adidas',
        element: <Adidas></Adidas>,
        loader: () => fetch('http://localhost:3000/products')
      },
      {
        path: '/gucci',
        element: <Gucci></Gucci>,
        loader: () => fetch('http://localhost:3000/products')
      },
      {
        path: '/zara',
        element: <Zara></Zara>,
        loader: () => fetch('http://localhost:3000/products')
      },
      {
        path: '/hugoboss',
        element: <HugoBoss></HugoBoss>,
        loader: () => fetch('http://localhost:3000/products')
      },
      {
        path: '/levis',
        element: <Levis></Levis>,
        loader: () => fetch('http://localhost:3000/products')
      },
      {
        path: '/details/:_id',
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`products/${params._id}`)
      },

      // {
      //   path: '/event/:id',
      //   element: <PrivateRoute><Event></Event></PrivateRoute>,
      //   loader: ({ params }) => fetch(`/events.json/${params.id}`)
      // },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
