import './styles/Erro-page.css'

import { Link, useParams } from 'react-router-dom';

const schoolDetails = {
    1: {
        name: 'Colégio Novo Horizonte',
        description: 'Uma instituição comprometida com a educação de qualidade desde 1995.',
        address: 'Rua das Flores, 123, Bairro Primavera',
    },
    2: {
        name: 'Instituto Educacional Sol Nascente',
        description: 'Focado no desenvolvimento integral do aluno, com ênfase em tecnologia.',
        address: 'Avenida Central, 456, Centro',
    },
    3: {
        name: 'Colégio São Francisco de Assis',
        description: 'Conhecido por seu forte programa de atividades extracurriculares.',
        address: 'Travessa Alegria, 789, Bairro São João',
    },
    4: {
        name: 'Colégio Integração',
        description: 'Promovendo a integração entre alunos, pais e comunidade.',
        address: 'Rua das Palmeiras, 101, Bairro das Acácias',
    },
    5: {
        name: 'Escola do Futuro',
        description: 'Apostando em metodologias inovadoras para preparar os alunos para o futuro.',
        address: 'Praça da Liberdade, 102, Bairro Novo',
    },
};

const Detalhes_escola = () => {

    const { id } = useParams();
    const school = schoolDetails[id];

    if (!school) {
        return <div>Escola não encontrada!</div>;
    }
    return (
        <div className="">
            <div>
                <h2>{school.name}</h2>
                <p>{school.description}</p>
                <p><strong>Endereço:</strong> {school.address}</p>
            </div>
        </div>
    )
}

export default Detalhes_escola;