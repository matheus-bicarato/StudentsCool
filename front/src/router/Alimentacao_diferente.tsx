import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/alimentacao_especiais.css';

interface Contato {
    id: number;
    nome: string;
    mensagem: string;
    duvidaOuAlimentacao: boolean;
    arquivo?: string; // Base64 do arquivo PNG
}

const Alimentacao_diferente = () => {
    const [contatos, setContatos] = useState<Contato[]>([]);

    useEffect(() => {
        const fetchContatos = async () => {
            try {
                const response = await axios.get<Contato[]>('http://localhost:8080/contato');
                console.log('Dados recebidos:', response.data);
                const filteredContatos = response.data.filter(contato => contato.duvidaOuAlimentacao);
                setContatos(filteredContatos);
            } catch (error) {
                console.error('Erro ao buscar contatos:', error);
            }
        };

        fetchContatos();
    }, []);

    const handleDownload = (base64: string) => {
        try {
            // Remover prefixo 'data:image/png;base64,' se existir
            const cleanBase64 = base64.startsWith('data:image/png;base64,') 
                ? base64.replace('data:image/png;base64,', '') 
                : base64;

            const byteCharacters = atob(cleanBase64);
            const byteNumbers = new Array(byteCharacters.length);
            
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'image/png' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'arquivo_medico.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Erro ao fazer download do arquivo:', error);
        }
    };

    return (
        <div className="">
            <Header />
            <div className="main_alimentação_fresco">
                <h1 className='title_alimentacao_fescos'>Alimentação especiais</h1>
                {contatos.length === 0 ? (
                    <p>Nenhum contato disponível.</p>
                ) : (
                    contatos.map(contato => (
                        <div key={contato.id} className="medical-card">
                            <div className="medical-card__header">
                                <h1 className="medical-card__name">{contato.nome}</h1>
                            </div>
                            <div className="medical-card__description">
                                <h2 className="medical-card__description-title">Descrição</h2>
                                <p className="medical-card__description-text">
                                    {contato.mensagem}
                                </p>
                            </div>
                            <button
                                className="medical-card__download-button"
                                onClick={() => contato.arquivo ? handleDownload(contato.arquivo) : undefined}
                                disabled={!contato.arquivo}
                            >
                                {contato.arquivo ? 'Baixar Arquivo Médico' : 'Não tem arquivo médico'}
                                <span className="medical-card__download-icon">📥</span>
                            </button>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Alimentacao_diferente;
