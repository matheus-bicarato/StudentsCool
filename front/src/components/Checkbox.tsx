import { useState } from 'react';
import './styles/Checkbox.css';

const CheckboxList = ({ items }) => {
    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = (id) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div className="checkbox-list-container">
            {items.map(item => (
                <div key={item.id} className="checkbox-container">
                    <input
                        type="checkbox"
                        id={item.id}
                        checked={!!checkedItems[item.id]}
                        onChange={() => handleChange(item.id)}
                        required
                    />
                    <label htmlFor={item.id}>{item.label}</label>
                </div>
            ))}
        </div>
    );
};

export default CheckboxList;