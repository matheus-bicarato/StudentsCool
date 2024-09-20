import React, { useState } from 'react';
import '../styles/Checkbox.css';
import Counter from './Count';

const CheckboxList = ({ title, items }) => {
    const [itemsState, setItemsState] = useState({});

    const handleChange1 = (event) => {
        const { name, checked } = event.target;
        setItemsState((prevState) => ({
            ...prevState,
            [name]: checked ? { count: 1 } : undefined,
        }));
    };

    const handleCountChange = (name, increment) => {
        setItemsState((prevState) => {
            const currentItem = prevState[name] || { count: 0 };
            const newCount = Math.max(currentItem.count + increment, 0);
            return {
                ...prevState,
                [name]: newCount > 0 ? { count: Math.min(newCount, 3) } : undefined,
            };
        });
    };

    const handleSubmit1 = (event) => {
        event.preventDefault();
        console.log('Opções selecionadas:', itemsState);
    };

    return (
        <form className='form_container_filtro' onSubmit={handleSubmit1}>
            <div className="barra_porple"></div>
            <div className="container_Filtro_itens">
                <h1>{title}</h1>
                <div className="checkbox-container">
                    {items.map((item) => (
                        <div key={item.id} className='input_chacklist_filtro'>
                            <label>
                                <input
                                    type="checkbox"
                                    name={`item${item.id}`}
                                    checked={!!itemsState[`item${item.id}`]}
                                    onChange={handleChange1}
                                />
                                {item.label}
                            </label>
                            {itemsState[`item${item.id}`] && (
                                <Counter
                                    count={itemsState[`item${item.id}`].count}
                                    onIncrement={() => handleCountChange(`item${item.id}`, 1)}
                                    onDecrement={() => handleCountChange(`item${item.id}`, -1)}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="container_Filtro_button">
                <button className="button_Filtro" type="submit">Enviar</button>
            </div>
        </form>
    );
};

export default CheckboxList;
