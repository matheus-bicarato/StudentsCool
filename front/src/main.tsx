import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase_connect';
import { ring2 } from 'ldrs'
import axios from 'axios'
// importa o css para fazer o carregamento da pag ficar bonitin
import './router/styles/Main.css'

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
import Add_cardapio from './router/add_cardapio.tsx'
import Alimentacao_diferente from './router/Alimentacao_diferente.tsx'
import Perfil from './router/perfil.tsx'
import ContatoAlimentEX from './router/Contato_Alimentação_especial.tsx'

  // rotas que o usuário logado pode acessar
  const rotas = [
    { path: "/", element: <LandingPage /> },
    { path: "/Home", element: <Home /> },
    { path: "/Cardapio", element: <Cardapio /> },
    { path: "/Cadastrar_user", element: <Cadastrar_user /> },
    { path: "/Cadastro", element: <Cadastro /> },
    { path: "/Contato", element: <Contato /> },
    { path: "/cadastro-feito", element: <Cadastro_feito /> },
    { path: "/Filtro_cardapio", element: <Filtro_cardapio /> },
    { path: "/Contas_cadastradas", element: <Users_cadastrados /> },
    { path: "/Nao_cadastradas", element: <Escolas_nao_cadastradas /> },
    { path: "/Cadastradas", element: <Escolas_Cadastradas /> },
    { path: "/Detalhes_escolas", element: <Detalhes_escola /> },
    { path: "/quantidade_de_alimentos", element: <Tabela_notricao /> },
    { path: "/Adicionar_cardapio", element: <Add_cardapio /> },
    { path: "/Alimentacao_especiais", element: <Alimentacao_diferente/> },
    { path: "/usuario", element: <Perfil/> },
    { path: "/ContatoAlimentEX", element: <ContatoAlimentEX/> },
  ];
  // rotas que o usuário não logado pode acessar
  const rotasNaoLogado = [
    { path: "/", element: <LandingPage /> },
    { path: "/Login", element: <Login /> },
  ];


const AppRoutes = () => {
  const [user, loading, error] = useAuthState(auth);
  const [autoridade, setAutoridade] = useState<string | null>(null);
  ring2.register()

  useEffect(() => {
    if(user) {
      const userUid = user.uid;

      axios.get(`http://localhost:8080/users/${userUid}`)
        .then(response => {
          const autoridade = response.data.authority;
          setAutoridade(autoridade);
        })
        .catch(error => console.log(`Erro ao puxar infos do usuário: ${error.message}`))
    }
  }, [user]);
  
  // carregamento do conteúdo da pagina
  if (loading) {
    return (
      <div className='body-de-carregamento'>
        <l-ring-2
          size="70"
          stroke="5"
          stroke-length="0.25"
          bg-opacity="0.1"
          speed="0.8"
          color="#00aaff"
        ></l-ring-2>
      </div>
    )
  }

  // caso dê erro no carregamento
  if (error) {
    return <div>Ocorreu um erro: {error.message}</div>;
  }

  // muda o conteúdo de "selectedRoutes dependendo do estado do usuário"
  const selectedRoutes = user ? rotas : rotasNaoLogado;

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
