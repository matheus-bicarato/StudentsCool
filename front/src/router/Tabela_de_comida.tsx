import React, { useEffect } from 'react';
import './styles/Menu.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase_connect';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Menu = () => {
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
            <div className="menu-page">
                <h1 className="menu-title">Nutricionista</h1>

                <div className="meal-section">
                    <div className="meal-card morning-snack">
                        <p className="meal-units">Unidades a ser produzidas:</p>
                        <h2 className="meal-name">Lanche da Manhã</h2>
                        <div className="meal-items morning-items">
                            <div className="meal-item">
                                <p>Pão integral com queijo branco</p>
                                <p>• 1 unidade 60 g</p>
                                <p>460 Unidades</p>
                            </div>
                            <div className="meal-item">
                                <p>Maçã</p>
                                <p>• 1 unidade 150 g</p>
                                <p>174 Unidades</p>
                            </div>
                            <div className="meal-item">
                                <p>Suco de laranja natural</p>
                                <p>• 1 unidade 300 ml</p>
                                <p>145 L</p>
                            </div>
                        </div>
                    </div>

                    <div className="meal-card lunch">
                        <p className="meal-units">Unidades a ser produzidas:</p>
                        <h2 className="meal-name">Almoço</h2>
                        <div className="meal-items lunch-items">
                            <div className="meal-item">
                                <p>Arroz integral</p>
                                <p>• 1 porção 250 g</p>
                                <p>400 kg</p>
                            </div>
                            <div className="meal-item">
                                <p>Frango grelhado</p>
                                <p>• 2 filés 250 g</p>
                                <p>450 kg</p>
                            </div>
                            <div className="meal-item">
                                <p>Brócolis a vapor</p>
                                <p>• 1 porção 80 g</p>
                                <p>250 kg</p>
                            </div>
                            <div className="meal-item">
                                <p>Salada de cenoura com pepino</p>
                                <p>• 1 porção 100 g</p>
                                <p>250 kg</p>
                            </div>
                            <div className="meal-item">
                                <p>Pera</p>
                                <p>• 1 unidade 130 g</p>
                                <p>230 Unidades</p>
                            </div>
                        </div>
                    </div>

                    <div className="meal-card afternoon-snack">
                        <p className="meal-units">Unidades a ser produzidas:</p>
                        <h2 className="meal-name">Lanche da Tarde</h2>
                        <div className="meal-items afternoon-items">
                            <div className="meal-item">
                                <p>Iogurte natural com granola</p>
                                <p>• 1 unidade 200 ml</p>
                                <p>500 Unidades</p>
                            </div>
                            <div className="meal-item">
                                <p>Biscoito integral</p>
                                <p>• 1 unidade 150 g</p>
                                <p>480 Unidades</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="menu-buttons">
                    <button className="menu-button evaluate-button">Avaliação do Cardápio</button>
                    <button className="menu-button special-button">Alimentação Especial</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Menu;
