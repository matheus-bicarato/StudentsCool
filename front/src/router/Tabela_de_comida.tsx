import React from 'react';
import './styles/TabelaPresenca.css'; // Importa o arquivo de estilos
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Tabela_notricao = () => {
    return (
        <div className="">
            <Header />
            <div className="fundo_Tabela">
                <div className="tabela-container">
                    <table className="tabela">
                        <thead>
                            <tr>
                                <th>SEMANA</th>
                                <th>ALUNOS PRESENTES</th>
                                <th>QUANTIDADE DE ALIMENTOS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Segunda-Feira</td>
                                <td>547</td>
                                <td>0 Kg</td>
                            </tr>
                            <tr>
                                <td>Terça-Feira</td>
                                <td>0</td>
                                <td>0 Kg</td>
                            </tr>
                            <tr>
                                <td>Quarta-Feira</td>
                                <td>0</td>
                                <td>0 Kg</td>
                            </tr>
                            <tr>
                                <td>Quinta-Feira</td>
                                <td>0</td>
                                <td>0 Kg</td>
                            </tr>
                            <tr>
                                <td>Sexta-Feira</td>
                                <td>0</td>
                                <td>0 Kg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="button_tabela">
                    <Link to={'/'}>
                        <button className='button_padrao '>pessoas com alimentação especiais</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Tabela_notricao;
