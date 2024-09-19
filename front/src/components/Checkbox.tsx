import React, { useState } from 'react';

const CheckboxForm = () => {
    const [selectedOptions, setSelectedOptions] = useState({});

    const options = [
        { id: 1, label: 'Opção 1' },
        { id: 2, label: 'Opção 2' },
        { id: 3, label: 'Opção 3' },
    ];

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setSelectedOptions((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode processar as opções selecionadas
        console.log('Opções selecionadas:', selectedOptions);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Escolha suas opções</h1>
            {options.map((option) => (
                <div key={option.id}>
                    <label>
                        <input
                            type="checkbox"
                            name={`option${option.id}`}
                            checked={!!selectedOptions[`option${option.id}`]}
                            onChange={handleChange}
                        />
                        {option.label}
                    </label>
                </div>
            ))}
            <button className='button_cadastro' type="submit">Enviar</button>

        </form>
    );
};

export default CheckboxForm;
