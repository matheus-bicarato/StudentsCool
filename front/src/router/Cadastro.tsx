import Logo_lapis from "../assets/imagens/Logo_Lapis.png"
import Logo_bola from "../assets/imagens/Logo_branco.png"
import { Link } from 'react-router-dom'
import './styles/Cadastro.css'
import Checkbox from "../components/Checkbox"
const Cadastro = () => {

    const items = [
        { id: 'item1', label: 'Item 1' },
        { id: 'item2', label: 'Item 2' },
        { id: 'item3', label: 'Item 3' },
        { id: 'item4', label: 'Item 4' },
    ];

    return (
        <div className="">
            <header>
                <div className="right">
                    <Link to={"/"}><img src={Logo_lapis} alt="Logo" className="Logo_lapis" /></Link>
                </div>
                <div className="left">
                    <Link to={"/"}><img src={Logo_bola} alt="Logo" className="Logo_bola" /></Link>
                    <div className="Title_Header">
                        <h1><Link className="span" to={"/Login"}><span>Clique aqui</span></Link> <br />
                            para fazer o login !</h1>
                    </div>
                </div>
            </header>
            {/* ================================================================================= */}

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
                        id=""
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
                        id=""
                        placeholder="Digite sua Localização"
                        required
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Outra forma de contato.</label>
                    <input type="text"
                        className="input_container"
                        id=""
                        placeholder="Telefone da escola ou outro e-mail"
                        required
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Outra forma de contato.</label>
                    <Checkbox items={items} />
                </div>

                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Quantidade de turmas em cada Série.</label>
                    <input type="text"
                        className="input_container"
                        id=""
                        placeholder="Ex: 2 turmas (A,B)"
                        required
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Dias letivos da semana.</label>
                    <input type="text"
                        className="input_container"
                        id=""
                        placeholder="ex: 5 dias letivos (Segunda-feira a Sexta-feira)."
                        required
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Método de nota.</label>
                    <input type="text"
                        className="input_container"
                        id=""
                        placeholder="ex: Bimestre,trimestre ou semestre."
                        required
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Observações adicionais.</label>
                    <input type="text"
                        className="input_container"
                        id=""
                        placeholder="Observações adicionais."
                        required
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="container_cadastro_button">
                    <Link to={"/cadastro-feito"}><button className="button_cadastro">Concluir</button></Link>
                </div>


            </div>
        </div>
    )
}

export default Cadastro;