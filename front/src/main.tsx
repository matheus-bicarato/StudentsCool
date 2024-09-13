import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './router/Error-page.tsx'
import Cadastro from './router/Cadastro.tsx'
import Login from './router/Login.tsx'
import NoticiasPopulares from './router/NoticiasPopulares.tsx'
import NoticiasNovidade from './router/NoticiasNovidade.tsx'
import NoticiasRecente from './router/NoticiasRecente.tsx'
import Contato from './router/Contato.tsx'
import Cadastro_feito from './router/cadastro_feito.tsx'
import LandingPage from './router/LandingPage.tsx'
import Home from './router/Home.tsx'
import Cardapio from './router/cardapio.tsx'
import Filtro_cardapio from './router/filtro_cardapio.tsx'


const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,

    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/Cadastro",
        element: <Cadastro />
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/NoticiasPopulares",
        element: <NoticiasPopulares />
      },
      {
        path: "/NoticiasNovidade",
        element: <NoticiasNovidade />
      },
      {
        path: "/NoticiasRecente",
        element: <NoticiasRecente />
      },
      {
        path: "/Contato",
        element: <Contato />
      },
      {
        path: "/cadastro-feito",
        element: <Cadastro_feito />
      },
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/Cardapio",
        element: <Cardapio />
      },
      {
        path: "/Filtro_cardapio",
        element: <Filtro_cardapio />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
