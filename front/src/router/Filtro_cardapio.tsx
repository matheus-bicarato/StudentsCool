import CheckboxList1 from '../components/checklist/Checkbox_list1';
import CheckboxList2 from '../components/checklist/Checkbox_list2';
import CheckboxList3 from '../components/checklist/Checkbox_list3';
import AvaliaManha from '../components/StarRating/AvaliacaoManha'
import AvaliaAlmoco from '../components/StarRating/AvaliacaoAlmoco'
import AvaliaTarde from '../components/StarRating/AvaliacaoTarde'

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

    const [ratingManha, setRatingManha] = useState<number>(0);
    const [ratingAlmoco, setRatingAlmoco] = useState<number>(0);
    const [ratingTarde, setRatingTarde] = useState<number>(0);

    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

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
                
                axios.get(`http://localhost:8080/avaliacoes?usuario_id=${userUid}`)
                .then(response => {
                    if (response.data.length > 0) {
                        setIsButtonDisabled(true); // Desabilita o botão se houver avaliação
                    }
                })
                .catch(error => {
                    console.error('Erro ao verificar avaliações existentes:', error);
                });
            
        } else {
            // Redireciona se o usuário não estiver logado
            navigate('/error-page');
        }
    }, [user, navigate]);

    const handleEnviarClick = () => {
      
        const avaliacoes = {
          usuario_id: user?.uid,
          estrelaManha: ratingManha,  
          estrelaAlmoco: ratingAlmoco,
          estrelaTarde: ratingTarde   
        };
    
        axios.post('http://localhost:8080/avaliacoes', avaliacoes)
        .then((response) => {
          
          setIsButtonDisabled(true);
          Swal.fire({
            icon: 'success',
            title: 'Avaliações enviadas!',
            text: 'Sua avaliação foi enviada com sucesso.',
            confirmButtonText: 'Ok'
          });
        })
        .catch((error) => {
          console.error('Erro ao enviar as avaliações:', error);
    
          // Notificação de erro
          Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Houve um problema ao enviar sua avaliação. Tente novamente.',
            confirmButtonText: 'Ok'
          });
        });
      };

    return (
        <div>
            <Header />
            <div className="main_filtro_cardapio">
                <h1 className='title_cardapio'>Veja o cardápio de <span className='span_cardapio'>HOJE!</span></h1>
                <div><CheckboxList1 title="Escolha seu Lanche da Manhã" items={manha} /></div>
                <CheckboxList2 title="Escolha seu Almoço" items={almoco} />
                <div><CheckboxList3 title="Escolha seu Lanche da Tarde" items={tarde} /></div>
            </div>

            <div className="StarAvalia">
          <table style={{ width: "45%", textAlign: "center" }}>
            <tbody className="infosAvalia">
              <tr>
                <td>
                  <AvaliaManha rating={ratingManha} setRating={setRatingManha} />
                  <AvaliaAlmoco rating={ratingAlmoco} setRating={setRatingAlmoco}/>
                  <AvaliaTarde rating={ratingTarde} setRating={setRatingTarde}/>
                </td>
              </tr>
              <tr>
                <div className="contAvalia">
                  <button className="button_avalia" disabled={isButtonDisabled} onClick={handleEnviarClick}>{isButtonDisabled ? "Já enviado" : "ENVIAR"}</button>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
            <Footer />
        </div>
    );
}

export default Filtro_cardapio;
