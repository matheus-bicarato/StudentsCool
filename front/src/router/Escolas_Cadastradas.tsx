import React from 'react';
import './styles/escolas.css'; // Vamos criar este arquivo depois.
import imgEscolas from '../assets/imagens/casinha.png'
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const schools = [
    { id: 1, name: 'Colégio Novo Horizonte', imgURL: imgEscolas, path: '/' },
    { id: 2, name: 'Instituto Educacional Sol Nascente', imgURL: imgEscolas, path: '/' },
    { id: 3, name: 'Colégio São Francisco de Assis', imgURL: imgEscolas, path: '/' },
    { id: 4, name: 'Colégio Integração', imgURL: imgEscolas, path: '/' },
    { id: 5, name: 'Escola do Futuro', imgURL: imgEscolas, path: '/' },
];

const Escolas_Cadastradas = () => {
    return (
        <div className="">
            <Header />
            <div className="main_escolas">
                <div className="school-list-container">
                    <div className="container_buttons_ancoras">
                        <Link to={'/Cadastradas'}>
                            <button className='button_padrao'>Cadastradas</button>
                        </Link>
                        <Link to={'/Em_Andamento'}>
                            <button className='button_padrao'>Em Andamento</button>
                        </Link>
                        <Link to={'/Nao_cadastradas'}>
                            <button className='button_padrao'>Não cadastradas</button>
                        </Link>
                    </div>
                    <div className="Title_escola">
                        <h1>Escolas cadastradas</h1>
                    </div>
                    {schools.map((school) => (
                        <div key={school.id} className="school-item">
                            <Link className='itens_esquerda_escolas' to={''}>
                                <img src={school.imgURL} alt="School Icon" className="school-icon" />
                                <span className="school-name">{school.name}</span>

                            </Link>
                            <div className="">
                                <button className="btn delete-btn">Deletar</button>
                                <button className="btn view-btn">Visualizar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Escolas_Cadastradas;
