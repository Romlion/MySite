import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/HomePage/Home.jsx'
import ContactForm from './components/Formulaire/ContactForm.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/contact",
    element: <ContactForm/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <>
    <Home/>
    <ContactForm/>
    </>
    </RouterProvider>
  </React.StrictMode>
);

