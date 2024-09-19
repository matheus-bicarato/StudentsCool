import './styles/Button_cardapio.css';
import React, { useState, useEffect } from 'react';
import Segunda from './components_filtro_cardapio/segunda';
import Terca from '././components_filtro_cardapio/terca';
import Quarta from './components_filtro_cardapio/quarta';
import Quinta from './components_filtro_cardapio/quinta';
import Sexta from './components_filtro_cardapio/sexta';

const Button_cardapio = () => {
    const [activeDay, setActiveDay] = useState(null);
    const [ContentComponent, setContentComponent] = useState(null);

    const days = [
        { name: 'segunda-feira', component: <Segunda /> },
        { name: 'terça-feira', component: <Terca /> },
        { name: 'quarta-feira', component: <Quarta /> },
        { name: 'quinta-feira', component: <Quinta /> },
        { name: 'sexta-feira', component: <Sexta /> },
    ];

    useEffect(() => {
        const day = days.find(d => d.name === activeDay);
        if (day) {
            setContentComponent(day.component);
        } else {
            setContentComponent(null);
        }
    }, [activeDay]);

    return (
        <div className="buttons-filtro_cardapio">
            <h1>Escolha o dia para filtrar o que irá comer</h1>
            <div className="buttons-container">
                {days.map(({ name }) => (
                    <button
                        key={name}
                        className={`day-button ${activeDay === name ? 'active' : ''}`}
                        onClick={() => setActiveDay(name)} // Atualiza o dia ativo ao clicar
                    >
                        {name}
                    </button>
                ))}
            </div>
            <div className="content-display">
                {ContentComponent} {/* Renderiza o componente correspondente */}
            </div>
        </div>
    );
};

export default Button_cardapio;