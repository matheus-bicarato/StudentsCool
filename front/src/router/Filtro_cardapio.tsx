import CheckboxList from '../components/checklist/Checkbox_list1';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/filtro_cardapio.css';
import '../components/styles/Checkbox.css';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase_connect';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Filtro_cardapio = () => {
    const Manha = [
        { id: 1, label: 'Pão integral com queijo branco 1 unidade(60 g)' },
        { id: 2, label: 'Maçã 1 unidade (150 g)' },
        { id: 3, label: 'Suco de laranja natural (300 ml)' },
    ];

    const Almoco = [
        { id: 1, label: 'Arroz integral (250 g)' },
        { id: 2, label: 'Frango grelhado 2 filés (250 g)' },
        { id: 3, label: 'Brócolis a vapor (80 g)' },
        { id: 4, label: 'Salada de cenoura com pepino (100 g)' },
        { id: 5, label: 'Pera 1 unidade (130 g)' },
        { id: 6, label: 'Pera 1 unidade (130 g)' },
        { id: 7, label: 'Pera 1 unidade (130 g)' },
    ];
    const Tarde = [
        { id: 1, label: 'Iogurte natural com granola (200 g) ' },
        { id: 2, label: 'Biscoito integral (150 g)' },
    ];

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
        <div>
            <Header />
            <div className="main_filtro_cardapio">
                <h1 className='title_cardapio'>Veja o cardápio de <span className='span_cardapio'>HOJE!</span></h1>
                <div><CheckboxList title="Escolha seu Lanche da Manhã" items={Manha} /></div>
                <CheckboxList title="Escolha seu Almoço" items={Almoco} />
                <div><CheckboxList title="Escolha seu Lanche da Tarde" items={Tarde} /></div>
            </div>
            <Footer />
        </div>
    );
}

export default Filtro_cardapio;
