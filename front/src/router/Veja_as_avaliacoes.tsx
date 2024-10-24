import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import './styles/Veja_as_avaliacoes.css';

interface Avaliacao {
    id: number;
    estrelaManha: number;
    estrelaAlmoco: number;
    estrelaTarde: number;
    dataAvaliacao: string;
}

const Veja_as_avaliacoes: React.FC = () => {
    const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);

    useEffect(() => {
        const fetchAvaliacoes = async () => {
            try {
                const response = await axios.get<Avaliacao[]>('http://localhost:8080/avaliacoes');
                setAvaliacoes(response.data);
            } catch (error) {
                console.error('Erro ao buscar avaliações:', error);
            }
        };

        fetchAvaliacoes();
    }, []);

    // Função para calcular a média
    const calcularMedia = (avaliacoes: number[]): number => {
        const soma = avaliacoes.reduce((acc, valor) => acc + valor, 0);
        return avaliacoes.length > 0 ? soma / avaliacoes.length : 0;
    };

    // Extraindo as avaliações para cada refeição
    const estrelasManha = avaliacoes.map(av => av.estrelaManha);
    const estrelasAlmoco = avaliacoes.map(av => av.estrelaAlmoco);
    const estrelasTarde = avaliacoes.map(av => av.estrelaTarde);

    // Cálculo das médias
    const mediaManha = calcularMedia(estrelasManha);
    const mediaAlmoco = calcularMedia(estrelasAlmoco);
    const mediaTarde = calcularMedia(estrelasTarde);

    return (
        <div className="">
            <Header />

            <div className="Main_vj_avaliacoes">
                <div>
                    <h1 className="Title_vj_avaliacoes">
                        <span className='span_Title_vj_avaliacoes'>Veja</span> as avaliações!
                    </h1>
                </div>

                <div className="container_vj_avaliacoes">
                    <h1>Lanche da Manhã: </h1>
                    <div className="container_vj_estrela">
                        <h3>Avaliação Média: {mediaManha.toFixed(2)} <FaStar /></h3>
                    </div>
                </div>

                <div className="container_vj_avaliacoes">
                    <h1>Almoço: </h1>
                    <div className="container_vj_estrela">
                        <h3>Avaliação Média: {mediaAlmoco.toFixed(2)} <FaStar /></h3>
                    </div>
                </div>

                <div className="container_vj_avaliacoes">
                    <h1>Lanche da Tarde: </h1>
                    <div className="container_vj_estrela">
                        <h3>Avaliação Média: {mediaTarde.toFixed(2)} <FaStar /></h3>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Veja_as_avaliacoes;
