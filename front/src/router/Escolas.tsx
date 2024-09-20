import React from 'react';
import './styles/escolas.css'; // Vamos criar este arquivo depois.
import imgEscolas from '../assets/imagens/casinha.png'
import Header from '../components/Header';

const schools = [
    { id: 1, name: 'Colégio Novo Horizonte', imgURL: imgEscolas },
    { id: 2, name: 'Instituto Educacional Sol Nascente', imgURL: imgEscolas },
    { id: 3, name: 'Colégio São Francisco de Assis', imgURL: imgEscolas },
    { id: 4, name: 'Colégio Integração', imgURL: imgEscolas },
    { id: 5, name: 'Escola do Futuro', imgURL: imgEscolas },
];

const escolas = () => {
    return (
        <div className="">
            <Header />
            <div className="school-list-container">
                {schools.map((school) => (
                    <div key={school.id} className="school-item">
                        <img src={school.imgURL} alt="School Icon" className="school-icon" />
                        <span className="school-name">{school.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default escolas;
