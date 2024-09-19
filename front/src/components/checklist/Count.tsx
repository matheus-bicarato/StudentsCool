// src/components_filtro_cardapio/Count.jsx
import React from 'react';

const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <div className="counter-buttons">
            <button onClick={onDecrement}>-</button>
            <span>{count}</span>
            <button onClick={onIncrement}>+</button>
        </div>
    );
};

export default Counter;
