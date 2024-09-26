
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header_simplificado from '../components/Header_simplificado';
import Footer from '../components/Footer';
import axios from 'axios';
import './styles/Cadastro.css';

const Cadastro = () => {
    const [nomeEscola, setNomeEscola] = useState('');
    const [email, setEmail] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [contato, setContato] = useState('');
    const [quantidadeAlunos, setQuantidadeAlunos] = useState('');
    const [diasLetivos, setDiasLetivos] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const navigate = useNavigate();

    const EscolaSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const escolaData = {
            nome: nomeEscola,
            email: email,
            localizacao: localizacao,
            contato_alt: contato,
            qtd_alunos: quantidadeAlunos,
            dias_letivos: diasLetivos,
            observacoes: observacoes,
            aprovado: false,
        };

        try {
            await axios.post('http://localhost:8080/escolas', escolaData);

            navigate('/cadastro-feito');
        } catch (error) {
            console.error('Erro ao cadastrar a escola: ', error);
        }
    }
    return (
        <form onSubmit={EscolaSubmit}>
            <Header_simplificado />
            <div className="main_cadastro">
                <div className="barra_porple"></div>
                <div className="container_Cadastro">
                    <h1 className="title_cadastro">Cadastre a sua Escola</h1>
                    <br />
                    <hr className="hr_linha" />
                    <br />
                    <h3 className="conteudo_container_cadastro">Apresentamos o STUDENTSCOOL, uma plataforma inovadora que nasceu com uma missão clara:
                        combater o desperdício de alimentos nas escolas. A ideia inicial do site era permitir que os alunos visualizassem o cardápio escolar
                        e indicassem suas intenções de consumo. Isso visava promover uma gestão mais eficiente dos recursos alimentares e reduzir o desperdício gerado pelas escolas.</h3>
                </div>
                {/* container de perguntas */}
                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Nome da escola.</label>
                    <input type="text"
                        className="input_container"
                        id=""
                        placeholder="Nome da escola"
                        required
                        value={nomeEscola}
                        onChange={(e) => setNomeEscola(e.target.value)}
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Digite um E-mail em que contatarmos.</label>
                    <input type="email"
                        className="input_container"
                        id="email"
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Localização.</label>
                    <input type="text"
                        className="input_container"
                        id="Localizacao"
                        placeholder="Localização da escola"
                        required
                        value={localizacao}
                        onChange={(e) => setLocalizacao(e.target.value)}
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Outra forma de contato.</label>
                    <input type="text"
                        className="input_container"
                        id="contato"
                        placeholder="Email da escola ou telefone"
                        required
                        value={contato}
                        onChange={(e) => setContato(e.target.value)}
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Quantidade de Alunos.</label>
                    <input type="text"
                        className="input_container"
                        id="contato"
                        placeholder="Ex: 0 alunos"
                        required
                        value={quantidadeAlunos}
                        onChange={(e) => setQuantidadeAlunos(e.target.value)}
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Dias letivos da semana.</label>
                    <input type="text"
                        className="input_container"
                        id="contato"
                        placeholder="ex: segunda á sexta-feira"
                        required
                        value={diasLetivos}
                        onChange={(e) => setDiasLetivos(e.target.value)}
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Observaçoes adicionais.</label>
                    <input type="text"
                        className="input_container"
                        id="contato"
                        placeholder="Observações adicionais"
                        required
                        value={observacoes}
                        onChange={(e) => setObservacoes(e.target.value)}
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="container_cadastro_button">
                    <button type="submit" className="button_cadastro">Concluir</button>
                </div>


            </div>
            <Footer/>
        </form>
    )
}

export default Cadastro;