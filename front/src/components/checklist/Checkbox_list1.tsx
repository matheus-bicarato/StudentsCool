import React, { useState } from 'react';
import '../styles/Checkbox.css';
import Counter from './Count';

const CheckboxList3 = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [itemCounts, setItemCounts] = useState({});

    const items = [
        {
            id: 1, label: 'Pão integral com queijo branco 1 unidade(60 g)' },
        { id: 2, label: 'Maçã 1 unidade (150 g)' },
        { id: 3, label: 'Suco de laranja natural 300 ml' },
    ];

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setSelectedOptions((prevState) => ({
            ...prevState,
            [name]: checked,
        }));

        if (checked) {
            setItemCounts((prevState) => ({
                ...prevState,
                [name]: 1,
            }));
        } else {
            setItemCounts((prevState) => {
                const { [name]: removed, ...rest } = prevState;
                return rest;
            });
        }
    };

    const handleCountChange = (name, increment) => {
        setItemCounts((prevState) => {
            const currentCount = prevState[name] || 0;
            const newCount = Math.max(currentCount + increment, 0);
            return {
                ...prevState,
                [name]: Math.min(newCount, 3), // Define o máximo como 3
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Opções selecionadas:', selectedOptions);
        console.log('Contagem de itens:', itemCounts);
    };

    return (
        <form className='form_container_filtro' onSubmit={handleSubmit}>
            <div className="barra_porple"></div>
            <div className="container_Filtro_itens">
                <h1>Escolha seu Lanche</h1>
                <div className="checkbox-container">
                    <h1>Manhã</h1>
                    {items.map((item) => (
                        <div key={item.id} className='input_chacklist_filtro'>
                            <label>
                                <input
                                    type="checkbox"
                                    name={`item${item.id}`}
                                    checked={!!selectedOptions[`item${item.id}`]}
                                    onChange={handleChange}
                                />
                                {item.label}
                            </label>
                            {selectedOptions[`item${item.id}`] && (
                                <Counter
                                    count={itemCounts[`item${item.id}`] || 0}
                                    onIncrement={() => handleCountChange(`item${item.id}`, 1)}
                                    onDecrement={() => handleCountChange(`item${item.id}`, -1)}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <hr className="hr_opacity" />
            </div>
            <div className="container_Filtro_button">
                <button className="button_Filtro" type="submit">Enviar</button>
            </div>
        </form>
    );
};

export default CheckboxList3;
