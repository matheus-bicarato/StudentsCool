import React, { useState } from 'react';
import './styles/dropdown.css'; // Certifique-se de que o caminho esteja correto

const DropdownSelect = ({ options, title }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Opção selecionada:', selectedOption);
    };

    return (
        <form className="dropdown-form" onSubmit={handleSubmit}>
            <label className="dropdown-label">
                {title}
                <select
                    className="dropdown-select"
                    value={selectedOption}
                    onChange={handleChange}
                >
                    <option value="">Selecione uma opção</option>
                    {options.map((option) => (
                        <option key={option.id} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
        </form>
    );
};

export default DropdownSelect;
