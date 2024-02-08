import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/HomePage/Home.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import "./components/NavBar/NavBar.css"
import ContactForm from './components/Formulaire/ContactForm.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/contact",
    element: (
      <NavBar/>,
    <ContactForm/>
    )
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <>
    <Home/>
    <NavBar/>
    <ContactForm/>
    </>
    </RouterProvider>
  </React.StrictMode>
);

