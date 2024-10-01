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
import Filtro_cardapio from './router/Filtro_cardapio.tsx'
import Cadastrar_user from './router/cadastrar_user.tsx'
import Users_cadastrados from './router/Users_cadastradas.tsx'
import Detalhes_escola from './router/Detalhes_escolas.tsx'
import Escolas_nao_cadastradas from './router/Escolas_nao_cadastradas.tsx'
import Escolas_Cadastradas from './router/Escolas_Cadastradas.tsx'
import Tabela_notricao from './router/Tabela_de_comida.tsx'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase_connect';
import { ring2 } from 'ldrs'
// importa o css para fazer o carregamento da pag ficar bonitin
import './router/styles/Main.css'


const AppRoutes = () => {
  const [user, loading, error] = useAuthState(auth);
  ring2.register()

  // carregamento do conteúdo da pagina
  if (loading) {
    return (
      <body className='body-de-carregamento'>
        <l-ring-2
          size="70"
          stroke="5"
          stroke-length="0.25"
          bg-opacity="0.1"
          speed="0.8" 
          color="#00aaff" 
        ></l-ring-2>
      </body>
    )
    
  }

  // caso dê erro no carregamento
  if (error) {
    return <div>Ocorreu um erro: {error.message}</div>;
  }

  // rotas que o usuário logado pode acessar
  const rotasLogado = [
    {
      path: "/",
      element: <LandingPage />
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
      path: "/Cadastrar_user",
      element: <Cadastrar_user />
    },
    {
      path: "/Cadastro",
      element: <Cadastro />
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
      path: "/Filtro_cardapio",
      element: <Filtro_cardapio />
    },
    {
      path: "/Contas_cadastradas",
      element: <Users_cadastrados />
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
  // rotas que o usuário não logado pode acessar
  const rotasNaoLogado = [
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/Login",
      element: <Login />
    }
  ]

  // muda o conteúdo de "selectedRoutes dependendo do estado do usuário"
  const selectedRoutes = user ? rotasLogado : rotasNaoLogado;

  // cria o RouterProvider passando selectedRoutes como o children
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <App />,
          errorElement: <Error />,
          children: selectedRoutes,
        },
      ])}
    />
  );
};

// passa o "AppRoutes" como as rotas a serem renderizadas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
);
