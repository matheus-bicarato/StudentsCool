import React, { useEffect, useState } from 'react';
import './styles/Users_cadastradas.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';

const contas_cadastradas = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/users')
        .then(response => setUsers(response.data))
        .catch(error => alert(`Não foi possível recuperar os usuários: ${error.message}`))
    }, [])

    // 
    const deleteUser = (id, nome) => {
        Swal.fire({
            title: "Confirme",
            text: `Você realmente quer deletar o usuário "${nome}" ?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Deletar",
            cancelButtonText: "Cancelar"
          }).then((result) => {
            if (result.isConfirmed) {
                // logica do axios
                axios.delete(`http://localhost:8080/users/${id}`)
                .then(response => {
                    setUsers(users.filter(user => user.id !== id))

                    Swal.fire({
                        title: "Deletado!",
                        text: `O usuário "${nome}" foi deletado com sucesso`,
                        icon: "success"
                    });
                })
                .catch(error => {
                    Swal.fire({
                        title: "Erro!",
                        text: `Não foi possível deletar esse usuário.`,
                        icon: "error"
                    });
                })

                
            }
          });
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
                                    <button className="btn delete-btn" onClick={() => deleteUser(user.id, user.nome)}>Deletar</button>
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
