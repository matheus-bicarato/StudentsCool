import Footer from '../components/Footer';
import Header from '../components/Header';
import img_cardapio from "../assets/imagens/cardapio.png";
import './styles/Cardapio.css';
import { Link } from 'react-router-dom';
import Avaliar from '../components/AvaliacaoCardapio';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase_connect';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Cardapio = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const userUid = user.uid;

            // Verifica a autoridade do usuário logado
            axios.get(`http://localhost:8080/users/${userUid}`)
                .then(response => {
                    const autoridade = response.data.authority;

                    if (autoridade !== 'membro') {
                        navigate('/error-page'); // Redireciona para a página de erro se não for admin
                    }
                })
                .catch(error => {
                    Swal.fire({
                        title: 'Erro!',
                        text: `Erro ao verificar autoridade: ${error.message}`,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                });
        } else {
            // Redireciona se o usuário não estiver logado
            navigate('/error-page');
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
                    <img className='img_cardapio' src={img_cardapio} alt="cardapio" />
                    <div className="button_container_flex">
                        <div className="container_cardapio_button">
                            <Link to={"/"}><button className="button_cardapio">AVALIE O NOSSO CARDÁPIO</button></Link>
                        </div>
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
    );
}

export default Cardapio;
