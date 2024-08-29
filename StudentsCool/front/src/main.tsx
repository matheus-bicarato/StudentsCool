import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './router/Error-page.jsx'
import Home from './router/Home.jsx'
import Cadastro from './router/Cadastro.jsx'

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
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
