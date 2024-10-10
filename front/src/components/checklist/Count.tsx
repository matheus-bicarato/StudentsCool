// src/components_filtro_cardapio/Count.jsx
import React from 'react';

const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <div className="counter-buttons">
            <button onClick={(e) => { e.preventDefault(); onDecrement(); }}>-</button>
            <span>{count}</span>
            <button onClick={(e) => { e.preventDefault(); onIncrement(); }}>+</button>
        </div>
    );
};

export default Counter;
