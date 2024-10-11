import Footer from '../components/Footer';
import Header from '../components/Header';
import img_cardapio from "../assets/imagens/cardapio.png"
import './styles/Cardapio.css'
import { Link } from 'react-router-dom';

import Avaliar from '../components/AvaliacaoCardapio'
import { useEffect, useState } from 'react';
import { auth } from '../../firebase_connect';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Cardapio = () => {
    const [imagemBASE64, setImagemBASE64] = useState("");
    const [authority, setAuthority] = useState('')
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const atualizarImgCardapio = () => {
            axios.get('http://localhost:8080/CardapioImage/1')
            .then(response => {
                setImagemBASE64(response.data.imagem_cardapio);
            });
        };

        atualizarImgCardapio();
    }, [])

    useEffect(() => {
        if (user) {
            const userUid = user.uid;

            axios.get(`http://localhost:8080/users/${userUid}`)
                .then(response => {
                    const autoridade = response.data.authority;

                    setAuthority(autoridade);

                    // Verifica se a autoridade é "admin"
                    if (autoridade !== 'membro') {
                        navigate('/error-page'); // Redireciona para a página de erro
                    }
                })
                .catch(error => console.log(`Erro ao puxar infos do usuário: ${error.message}`));
        }
    }, [user, navigate]);

    return (
        <div className="">
            <Header />
            <main className="main_cardapio">
                <div className="main_cardapio_top">
                    <div className="container_title_cardapio">
                        <h1 className='title_cardapio'>Veja o cardápio dessa <span className='span_cardapio'>Semana!</span></h1>
                    </div>
                    <img className='img_cardapio' src={imagemBASE64} alt="cardapio" />
                    <div className="button_container_flex">
                        <div className="container_cardapio_button2">
                            <Link to={"/Filtro_cardapio"}><button className="button_cardapio">VEJA AS POÇÔES!</button></Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='contStar'>
                        <Avaliar />
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Cardapio;