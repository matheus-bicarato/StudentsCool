import React, { useState } from 'react';
import '../styles/Checkbox.css';
import Counter from './Count';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../../firebase_connect";

const CheckboxList = ({ title, items }) => {
    const [itemsState, setItemsState] = useState({});
    const [user] = useAuthState(auth);
    let userUid;

    const handleChange1 = (event) => {
        const { name, checked } = event.target;

        const id = parseInt(name.replace('item', ''));

        setItemsState((prevState) => ({
            ...prevState,
            [name]: checked ? { count: 1, id: id } : undefined,
        }));
    };

    const handleCountChange = (name, increment) => {
        setItemsState((prevState) => {
            const currentItem = prevState[name] || { count: 0, id: parseInt(name.replace('item', '')) };
            const newCount = Math.max(currentItem.count + increment, 0);
            return {
                ...prevState,
                [name]: newCount > 0 ? { count: Math.min(newCount, 3), id: currentItem.id } : undefined,
            };
        });
    };

    const handleSubmit1 = async (e) => {
        e.preventDefault();
        const userUid = user.uid;
        
        const selectedItems = Object.entries(itemsState)
        .filter(([key, value]) => value !== undefined)
        .map(([key, value]) => ({
            addCardapio: { id: value.id },
            id_user: userUid,
            porcoes_escolhidas: value.count,
        }));

        try {
            for (const item of selectedItems) {
                await axios.post('http://localhost:8080/cardapioSelecionado', item);
            }
            alert("Enviado com sucesso")
        } catch (error) {
            alert(`Deu merda: ${error}`)
        }
    };

    return (
        <form className='form_container_filtro' onSubmit={handleSubmit1}>
            <div className="filtro_cardapio"></div>
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
