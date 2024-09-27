import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './router/Error-page.tsx'
import Cadastro from './router/Cadastro.tsx'
import Login from './router/Login.tsx'
import Contato from './router/Contato.tsx'
import Cadastro_feito from './router/cadastro_feito.tsx'
import LandingPage from './router/LandingPage.tsx'
import Home from './router/Home.tsx'
import Cardapio from './router/cardapio.tsx'
import Filtro_cardapio from './router/filtro_cardapio.tsx'
import Cadastrar_user from './router/cadastrar_user.tsx'
import Users_cadastrados from './router/Users_cadastradas.tsx'
import Escolas_Em_Andamento from './router/Escolas_Em_andamento.tsx'
import Detalhes_escola from './router/detalhes_escolas.tsx'
import Escolas_nao_cadastradas from './router/escolas_nao_cadastradas.tsx'
import Escolas_Cadastradas from './router/Escolas_Cadastradas.tsx'
import Tabela_notricao from './router/Tabela_de_comida.tsx'


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
      {
        path: "/Cadastrar_user",
        element: <Cadastrar_user />
      },
      {
        path: "/Contas_cadastradas",
        element: <Users_cadastrados />
      },
      {
        path: "/Em_andamento",
        element: <Escolas_Em_Andamento />
      },
      {
        path: "/Nao_cadastradas",
        element: <Escolas_nao_cadastradas />
      },
      {
        path: "/Cadastradas",
        element: <Escolas_Cadastradas />
      },
      {
        path: "/Detalhes_escolas",
        element: <Detalhes_escola />
      },
      {
        path: "/quantidade_de_alimentos",
        element: <Tabela_notricao />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
