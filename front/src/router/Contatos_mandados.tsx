import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/contato_mandados.css';

// Definição do tipo para um contato
interface Contato {
    id: number;
    nome: string;
    mensagem: string;
    duvidaOuAlimentacao: boolean;
}

const Contatos_mandados: React.FC = () => {
    const [contatos, setContatos] = useState<Contato[]>([]);

    useEffect(() => {
        const fetchContatos = () => {
            axios.get<Contato[]>('http://localhost:8080/contato')
                .then(response => {
                    console.log('Dados recebidos:', response.data); // Adicione esta linha
                    const filteredContatos = response.data
                        .filter(contato => contato.duvidaOuAlimentacao === false)
                        .map(contato => ({
                            id: contato.id,
                            nome: contato.nome,
                            mensagem: contato.mensagem,
                            duvidaOuAlimentacao: contato.duvidaOuAlimentacao,
                        }));
                    setContatos(filteredContatos);
                })
                .catch(error => {
                    console.error('Erro ao buscar contatos:', error);
                });
        };

        fetchContatos();
    }, []);

    return (
        <div className="">
            <Header />
            <div className="main_contato_mandados">
                <div className="title_contato_container">
                    <h1 className='title_contatos_mandados'>Feedbacks</h1>
                </div>
                {contatos.length === 0 ? (
                    <div>
                        <p className='contato-card'>Nenhum contato disponível.</p>
                    </div>
                ) : (
                    contatos.map((contato) => (
                        <div key={contato.id} className="contato-card">
                            <div className="contato-card__header">
                                <h1 className="contato-card__name">{contato.nome}</h1>
                            </div>
                            <div className="contato-card__description">
                                <h2 className="contato-card__description-title">Mensagem</h2>
                                <p className="contato-card__description-text">
                                    {contato.mensagem}
                                </p>
                            </div>
                        </div>
                    ))
                )}

            </div>
            <Footer />
        </div>
    );
};

export default Contatos_mandados;
