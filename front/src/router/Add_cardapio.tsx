import './styles/Add_cardapio.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Input_Add_cardapio1 from '../components/Input_add_cardapio1';
import Input_Add_cardapio2 from '../components/Input_add_cardapio2';
import Input_Add_cardapio3 from '../components/Input_add_cardapio3';
import Add_imagem from '../components/Add_imagem';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase_connect';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Add_cardapio = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const userUid = user.uid;

            // Verifica a autoridade do usuário logado
            axios.get(`http://localhost:8080/users/${userUid}`)
                .then(response => {
                    const autoridade = response.data.authority;

                    if (autoridade !== 'cantina') {
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
        <div>
            <Header />
            <div className="container_main_add_cardapio">
                <Input_Add_cardapio1 />
                <Input_Add_cardapio2 />
                <Input_Add_cardapio3 />
                <Add_imagem />
            </div>
            <Footer />
        </div>
    );
};

export default Add_cardapio;
