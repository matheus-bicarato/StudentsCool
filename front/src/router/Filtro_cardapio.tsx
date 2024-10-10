import CheckboxList1 from '../components/checklist/Checkbox_list1';
import CheckboxList2 from '../components/checklist/Checkbox_list2';
import CheckboxList3 from '../components/checklist/Checkbox_list3';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/filtro_cardapio.css';
import '../components/styles/Checkbox.css';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase_connect';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Filtro_cardapio = () => {
    const [manha, setManha] = useState([]);
    const [almoco, setAlmoco] = useState([]);
    const [tarde, setTarde] = useState([]);

    useEffect(() => {
        const fetchCardapio = async () => {
            try {
                const response = await axios.get('http://localhost:8080/cardapio');
                
                const filterManha = response.data
                    .filter(item => item.periodo == "manha")
                    .map(item => ({
                        id: item.id,
                        label: `${item.nome_comida} (${item.tamanho_porcao}g)`
                    }));
                
                const filterAlmoco = response.data
                    .filter(item => item.periodo == "almoco")
                    .map(item => ({
                        id: item.id,
                        label: `${item.nome_comida} (${item.tamanho_porcao}g)`
                    }));

                const filterTarde = response.data
                    .filter(item => item.periodo == "tarde")
                    .map(item => ({
                        id: item.id,
                        label: `${item.nome_comida} (${item.tamanho_porcao}g)`
                    }));

                setManha(filterManha);
                setAlmoco(filterAlmoco);
                setTarde(filterTarde);

                // console.log("Itens resgatados:", response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCardapio()
    }, []);

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
                <div><CheckboxList1 title="Escolha seu Lanche da Manhã" items={manha} /></div>
                <CheckboxList2 title="Escolha seu Almoço" items={almoco} />
                <div><CheckboxList3 title="Escolha seu Lanche da Tarde" items={tarde} /></div>
            </div>
            <Footer />
        </div>
    );
}

export default Filtro_cardapio;
