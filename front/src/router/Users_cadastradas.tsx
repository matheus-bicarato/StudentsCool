import React, { useEffect, useState } from 'react';
import './styles/Users_cadastradas.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const contas_cadastradas = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/users')
        .then(response => setUsers(response.data))
        .catch(error => alert(`Não foi possível recuperar os usuários: ${error.message}`))
    }, [])

    const deleteUser = (id) => {
        const isConfirmed = window.confirm("Tem certeza que deseja deletar esse usuário?")

        if(isConfirmed) {
            axios.delete(`http://localhost:8080/users/${id}`)
            .then(response => setUsers(users.filter(user => user.id !== id)))
            .catch(error => alert(`Não foi possível deletar o usuário: ${error.message}`))
        }
    }

    return (
        <div className="main_user_cadastrados">
            <Header />
            <div className="table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th className="table-header">e-mail do usuário</th>
                            <th className="table-header">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="table-row">
                                <td className="user-email">{user.email}</td>
                                <td className="actions">
                                    <button className="btn delete-btn" onClick={() => deleteUser(user.id)}>Deletar</button>
                                    <button className="btn view-btn">Visualizar</button>
                                </td>
                            </tr>
                        ))}
                            
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
};

export default contas_cadastradas;
