import { useEffect, useState } from 'react';
import SchoolCard from '../components/SchoolCard';
import './styles/Perfil.css';
import profileImage from '../assets/imagens/gorila.jpg';
import perfil_email from '../assets/imagens/perfil-email.png';
import perfil_telefone from '../assets/imagens/perfil-telefone.png';
import perfil_cpf from '../assets/imagens/perfil-cpf.png';
import perfil_escola from '../assets/imagens/perfil-escola.png';
import { auth } from '../../firebase_connect';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ring2 } from 'ldrs'


import Header from '../components/Header';
import Footer from '../components/Footer';

const Perfil = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null); // Estado para armazenar os dados do usuário

    useEffect(() => {
        // Verifica se o usuário está logado
        if (!user) {
            navigate('/error-page'); // Redireciona para a página de erro se não estiver logado
            return; // Encerra a execução do useEffect
        }

        const userUid = user.uid;

        axios.get(`http://localhost:8080/users/${userUid}`)
            .then(response => {
                setUserData(response.data); // Armazena os dados do usuário no estado
            })
            .catch(error => console.log(`Erro ao puxar infos do usuário: ${error.message}`));
    }, [user, navigate]);

    // Verifica se os dados do usuário estão carregados
    if (!userData) {
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

    return (
        <div className="">
            <Header />
            <div className="main_perfil">
                <div className="container_perfil">
                    <div className="img_perfil">
                        <img className='url_img_perfil' src={profileImage} alt="perfil" />
                    </div>
                    <div className="conteudo_perfil">
                        <div className="container_name"><h1>{userData.nome || 'Nome do Usuário'}</h1></div>
                        <div className="itens_perfil">
                            <h1><span className='span_perfil'>Email</span>: {userData.email || 'Email não disponível'}</h1>
                            <hr />
                            <h1><span className='span_perfil'>CPF</span>: {userData.cpf || 'CPF não disponível'}</h1>
                            <hr />
                            <h1><span className='span_perfil'>Telefone</span>: {userData.telefone || 'Telefone não disponível'}</h1>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="title_perfil_escola">
                    <img src={perfil_escola} width={'50px'} alt="escola" />
                    <h1 className='font_escola'>Escola</h1>
                </div>
                <div className="container_name_escola">
                    <h1>{userData.escola || 'Escola não disponível'}</h1>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Perfil;
