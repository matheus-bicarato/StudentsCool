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
    email: string;
    localizacao: string;
    contato_alt: string;
    qtd_alunos: number;
    dias_letivos: string;
    observacoes: string;
    aprovado: boolean;
}

interface InfoSchool {
    nome: string;
    email: string;
    localizacao: string;
    qtd_alunos: number;
    observacoes: string;
    dias_letivos: number;
    contato_alt: string;
}

const Escolas_nao_cadastradas: React.FC = () => {
    const [schools, setSchools] = useState<School[]>([]);
    const [infoSchools, setInfoSchools] = useState<InfoSchool[]>([]);

    useEffect(() => {
        const fetchSchools = () => {
            axios.get<School[]>('http://localhost:8080/escolas')
                .then(response => {
                    // Filtra apenas as escolas que têm 'aprovado' como false
                    const formattedSchools = response.data
                        .filter(school => !school.aprovado) // Filtra escolas não aprovadas
                        .map(school => ({
                            id: school.id,
                            nome: school.nome,
                            email: school.email,
                            localizacao: school.localizacao,
                            contato_alt: school.contato_alt,
                            qtd_alunos: school.qtd_alunos,
                            dias_letivos: school.dias_letivos,
                            observacoes: school.observacoes,
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

    const handleAccept = (school: School) => {
        Swal.fire({
            title: "Você deseja aprovar esta escola?",
            showDenyButton: true,
            confirmButtonText: "Aceitar",
            denyButtonText: "Não aceitar"
        }).then((result) => {
            if (result.isConfirmed) {
                // Atualizando a escola para aprovar
                const updatedSchool = { ...school, aprovado: true };
                axios.put(`http://localhost:8080/escolas/${school.id}`, updatedSchool)
                    .then(() => {
                        setSchools(prevSchools => 
                            prevSchools.map(s => s.id === school.id ? updatedSchool : s)
                        );
                        Swal.fire("Aprovada!", "A escola foi aprovada com sucesso.", "success")
                        .then(() => {
                            window.location.href = '/cadastradas'
                        })
                    })
                    .catch(error => {
                        console.error('Erro ao aprovar escola:', error);
                        Swal.fire("Erro!", "Não foi possível aprovar a escola.", "error");
                    });
            }
        });
    };

    const handleView = (id: number) => {
        axios.get<InfoSchool>(`http://localhost:8080/escolas/${id}`)
        .then(response => {
            const infoSchool = {
                nome: response.data.nome,
                email: response.data.email,
                localizacao: response.data.localizacao,
                qtd_alunos: response.data.qtd_alunos,
                observacoes: response.data.observacoes,
                dias_letivos: response.data.dias_letivos,
                contato_alt: response.data.contato_alt
            };
    
            setInfoSchools([infoSchool]);

            Swal.fire({
                title: `${infoSchool.nome}`,
                icon: "info",
                html:  `<h3 style="font-weight: 200;">Email: ${infoSchool.email}</br>
                        Localização: ${infoSchool.localizacao}</br>
                        Quantidade de alunos: ${infoSchool.qtd_alunos}</br>
                        Observações: ${infoSchool.observacoes}</br>
                        Dias letivos: ${infoSchool.dias_letivos}</br>
                        Contato alternativo: ${infoSchool.contato_alt}</h3>`,
            });
        })
        .catch(error => {
            Swal.fire({
                title: `Erro!`,
                icon: "error",
                text: `Erro ao vizualizar informações: ${error.message}`,
            });
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
                        <h1>Escolas Não Aprovadas</h1>
                    </div>
                    {schools.map((school) => (
                        <div key={school.id} className="school-item">
                            <Link className='itens_esquerda_escolas' to={'#'}>
                                <img src={imgEscolas} alt="School Icon" className="school-icon" />
                                <span className="school-name">{school.nome}</span>
                            </Link>
                            <div className="">
                                <button 
                                    className="btn delete-btn" 
                                    onClick={() => handleDelete(school.id)} // Chama a função de deletar
                                >
                                    Deletar
                                </button>
                                <button 
                                    className="btn view-btn amarela"
                                    onClick={() => handleView(school.id)}
                                >
                                    Visualizar
                                </button>
                                <button 
                                    className="btn view-btn" 
                                    onClick={() => handleAccept(school)} // Chama a função de aceitar
                                >
                                    Aceitar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Escolas_nao_cadastradas;
