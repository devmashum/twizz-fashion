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
        element: <Services></Services>
      },
      {
        path: '/upcoming-events',
        element: <UpcomingEvents></UpcomingEvents>
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
        element: <Event></Event>,
        loader: () => fetch('/events.json')
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
