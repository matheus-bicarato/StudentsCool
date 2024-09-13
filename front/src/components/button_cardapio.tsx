import './styles/Button_cardapio.css'

import React, { useState } from 'react';
const Button_cardapio = () => {
    // Estado para o botão ativo
    const [activeDay, setActiveDay] = useState(null);

    // Função para lidar com o clique no botão
    const handleClick = (day) => {
        setActiveDay(day);
    };

    return (
        <div className="buttons-filtro_cardapio">
            <h1>Escolha o dia para filtrar o que irá comer</h1>
            <div className="buttons-container">
                {['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'Sexta-feira'].map((day) => (
                    <button
                        key={day}
                        className={`day-button ${activeDay === day ? 'active' : ''}`}
                        onClick={() => handleClick(day)}
                    >
                        {day}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Button_cardapio;


