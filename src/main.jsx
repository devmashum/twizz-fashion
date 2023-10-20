import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home';
import Services from './Pages/Services';
import UpcomingEvents from './Pages/UpcomingEvents';
import Contact from './Pages/Contact';
import Login from './Users/Login';
import Register from './Users/Register';
import Event from './Pages/Event';
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
        path: '/services',
        element: <PrivateRoute> <Services></Services></PrivateRoute>,
        loader: () => fetch('/services.json')
      },
      {
        path: '/upcoming-events',
        element: <PrivateRoute><UpcomingEvents></UpcomingEvents></PrivateRoute>,
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
        path: '/event/:id',
        element: <PrivateRoute><Event></Event></PrivateRoute>,
        loader: () => fetch('/events.json')
      },
      {
        path: '/addproducts',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
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
        element: <Adidas></Adidas>
      },
      {
        path: '/gucci',
        element: <Gucci></Gucci>
      },
      {
        path: '/zara',
        element: <Zara></Zara>
      },
      {
        path: '/hugoboss',
        element: <HugoBoss></HugoBoss>
      },
      {
        path: '/levis',
        element: <Levis></Levis>
      }
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
