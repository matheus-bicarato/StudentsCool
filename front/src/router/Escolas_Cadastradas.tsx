import React, { useEffect, useState } from 'react';
import './styles/escolas.css'; // Vamos criar este arquivo depois.
import imgEscolas from '../assets/imagens/casinha.png';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { auth } from '../../firebase_connect';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

interface School {
    id: number;
    nome: string;
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

const Escolas_Cadastradas: React.FC = () => {
    const [schools, setSchools] = useState<School[]>([]);
    const [infoSchools, setInfoSchools] = useState<InfoSchool[]>([]);
    const [authority, setAuthority] = useState('')
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const userUid = user.uid;

            axios.get(`http://localhost:8080/users/${userUid}`)
                .then(response => {
                    const autoridade = response.data.authority;

                    setAuthority(autoridade);

                    // Verifica se a autoridade é "admin"
                    if (autoridade !== 'adminGeral') {
                        navigate('/error-page'); // Redireciona para a página de erro
                    }
                })
                .catch(error => console.log(`Erro ao puxar infos do usuário: ${error.message}`));
        }
    }, [user, navigate]);
    
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
                                <button className="btn view-btn" onClick={() => handleView(school.id)}>Visualizar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Escolas_Cadastradas;
