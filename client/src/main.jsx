import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import UserProvider from "./context/UserContext"
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </HelmetProvider>
  </React.StrictMode>,
);