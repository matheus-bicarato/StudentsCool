import React, { useEffect, useState } from 'react';
import './styles/Menu.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase_connect';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Menu = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [meals, setMeals] = useState({
        almoco: {},
        manha: {},
        tarde: {}
    });

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
            
            axios.get('http://localhost:8080/cardapioSelecionado/qtd-total')
                .then(response => {
                    setMeals(response.data);
                })
                .catch(error => {
                    console.error('Erro ao buscar os dados da API:', error);
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
                            {Object.keys(meals.manha).map((item, index) => (
                                <div className="meal-item">
                                    <p>{item}</p>
                                    <p>• Quantidade: {meals.manha[item]}g</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="meal-card lunch">
                        <p className="meal-units">Unidades a ser produzidas:</p>
                        <h2 className="meal-name">Almoço</h2>
                        <div className="meal-items lunch-items">
                            {Object.keys(meals.almoco).map((item, index) => (
                                <div className="meal-item">
                                    <p>{item}</p>
                                    <p>• Quantidade: {meals.almoco[item]}g</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="meal-card afternoon-snack">
                        <p className="meal-units">Unidades a ser produzidas:</p>
                        <h2 className="meal-name">Lanche da Tarde</h2>
                        <div className="meal-items afternoon-items">
                            {Object.keys(meals.tarde).map((item, index) => (
                                <div className="meal-item">
                                    <p>{item}</p>
                                    <p>• Quantidade: {meals.tarde[item]}g</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="menu-buttons">
                    <Link to={''}><button className="menu-button evaluate-button">Avaliação do Cardápio</button></Link>
                    <Link to={'/Alimentacao_especiais'}><button className="menu-button special-button">Alimentação Especial</button></Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Menu;
