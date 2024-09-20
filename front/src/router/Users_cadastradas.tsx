import React from 'react';
import './styles/Users_cadastradas.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const users = [
    { email: "cleber.silva@studentscoolportal.com.br" },
    { email: "52149silvia.santos@studentscoolportal.com.br" },
    { email: "giovana.anjos@studentscoolportal.com.br" },
    { email: "andre.gomes@studentscoolportal.com.br" },
    { email: "silvana.carvalho@studentscoolportal.com.br" },
    { email: "4845julia.matos@studentscoolportal.com.br" }
];

const contas_cadastradas = () => {
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
                        {users.map((user, index) => (
                            <tr key={index} className="table-row">
                                <td className="user-email">{user.email}</td>
                                <td className="actions">
                                    <button className="btn delete-btn">Deletar</button>
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
