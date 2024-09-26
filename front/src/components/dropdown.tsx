import React, { useState } from 'react';
import './styles/dropdown.css'; // Certifique-se de que o caminho esteja correto

const DropdownSelect = ({ options, title, onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        if (onChange) {
            onChange(value); // Passa o valor selecionado para o componente pai
        }
    };

    return (
        <div className="dropdown-form">
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
        </div>
    );
};

export default DropdownSelect;
