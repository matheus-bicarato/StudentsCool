
import { Link } from 'react-router-dom'
import './styles/Cadastro.css'
import Header_simplificado from '../components/Header-simplificado';
import Footer from '../components/Footer';
const Cadastro = () => {

    return (
        <div>
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
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="container_cadastro_button">
                    <Link to={"/cadastro-feito"}><button className="button_cadastro">Concluir</button></Link>
                </div>


            </div>
            <Footer/>
        </div>
    )
}

export default Cadastro;