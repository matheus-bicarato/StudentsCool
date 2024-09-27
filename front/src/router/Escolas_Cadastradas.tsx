import React, { useEffect, useState } from 'react';
import './styles/escolas.css'; // Vamos criar este arquivo depois.
import imgEscolas from '../assets/imagens/casinha.png';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

interface School {
    id: number;
    nome: string;
    aprovado: boolean;
}

const Escolas_Cadastradas: React.FC = () => {
    const [schools, setSchools] = useState<School[]>([]);

    useEffect(() => {
        const fetchSchools = () => {
            axios.get<School[]>('http://localhost:8080/escolas')
                .then(response => {
                    const formattedSchools = response.data.
                        filter(school => school.aprovado)
                        .map(school => ({
                        id: school.id,
                        nome: school.nome,
                        aprovado: school.aprovado,
                    }));
                    setSchools(formattedSchools); 
                })
                .catch(error => {
                    console.error('Erro ao buscar escolas:', error);
                });
        };

        fetchSchools();
    }, []);

    const handleDelete = (id: number) => {
        Swal.fire({
            title: "Você tem certeza que deseja deletar esta escola?",
            showDenyButton: true,
            confirmButtonText: "Deletar",
            denyButtonText: "Não deletar"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8080/escolas/${id}`)
                    .then(() => {
                        setSchools(prevSchools => prevSchools.filter(school => school.id !== id));
                        Swal.fire("Deletado!", "A escola foi removida com sucesso.", "success");
                    })
                    .catch(error => {
                        console.error('Erro ao deletar escola:', error);
                        Swal.fire("Erro!", "Não foi possível deletar a escola.", "error");
                    });
            }
        });
    };

    return (
        <div className="">
            <Header />
            <div className="main_escolas">
                <div className="school-list-container">
                    <div className="container_buttons_ancoras">
                        <Link to={'/Cadastradas'}>
                            <button className='button_padrao'>Cadastradas</button>
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
                            <Link className='itens_esquerda_escolas' to={'#'}>
                                <img src={imgEscolas} alt="School Icon" className="school-icon" />
                                <span className="school-name">{school.nome}</span> {/* Use 'nome' aqui */}
                            </Link>
                            <div className="">
                                <button 
                                    className="btn delete-btn" 
                                    onClick={() => handleDelete(school.id)} // Chama a função de deletar
                                >
                                    Deletar
                                </button>
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
