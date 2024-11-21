import './styles/Add_cardapio.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Input_Add_cardapio1 from '../components/Input_add_cardapio1';
import Input_Add_cardapio2 from '../components/Input_add_cardapio2';
import Input_Add_cardapio3 from '../components/Input_add_cardapio3';
import Add_imagem from '../components/Add_imagem';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase_connect';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Add_cardapio = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [cardapioIsNull, setCardapioIsNull] = useState(true);

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
            
            // veririca se já tem algum cardápio cadastrado
            axios.get("http://localhost:8080/cardapio")
                .then(response => {
                    if (!response.data || Object.keys(response.data).length === 0) {
                        setCardapioIsNull(true)
                    } else {
                        setCardapioIsNull(false)
                    }
                })
        } else {
            // Redireciona se o usuário não estiver logado
            navigate('/error-page');
        }
    }, [user, navigate]);

    const deletarTodoCardapio = () => {
        Swal.fire({
            title: "Você tem certeza que deseja deletar o cardápio inteiro?",
            showDenyButton: true,
            confirmButtonText: "Deletar",
            denyButtonText: "Não deletar"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://localhost:8080/cardapio')
                .then(response => {
                    Swal.fire({
                        position: "center", 
                        icon: "success",
                        title: `Cardapio deletado com sucesso!`, 
                        showConfirmButton: false,
                        timer: 1500
                    })
                    .then(() => {
                        window.location.href = '/Adicionar_cardapio'
                    })
                })
                .catch(responseError => {
                    Swal.fire({
                        position: "center", 
                        icon: "error",
                        title: `Erro ao deletar avaliações ${responseError}`, 
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
            }
        });
    }

    return (
        <div>
            <Header />
            <div className="container_main_add_cardapio">
                {cardapioIsNull == true ? (
                    <div></div>
                ) : cardapioIsNull == false ? (
                    <div  className='btn-delete-div-cardapio'>
                        <h2>* Já tem um item adicionado no cardápio *</h2>
                        <button className='btn-delete-items-cardapio' onClick={() => deletarTodoCardapio()} title='Deletar cardápio'>Deletar todos os itens do cardápio</button>
                    </div>
                ) : (
                    <h1>Erro</h1>
                )}
                
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
