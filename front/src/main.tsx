import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './router/Error-page.tsx'
import Home from './router/Home.tsx'
import Cadastro from './router/Cadastro.tsx'
import Login from './router/Login.tsx'
import Noticias from './router/Noticias.tsx'

const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,

    errorElement: <Error/>,

    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Cadastro",
        element: <Cadastro/>
      },
      {
        path: "/Login",
        element: <Login/>
      },
      {
        path: "/Noticias",
        element: <Noticias/>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
