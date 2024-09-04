import Logo_lapis from "../assets/imagens/Logo_Lapis.png"
import Logo_bola from "../assets/imagens/Logo_branco.png"
import { Link } from 'react-router-dom'
import './styles/Cadastro.css'
const Cadastro = () => {
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
                    <label htmlFor="" className="conteudo_container_cadastro">Nome da escola</label>
                    <input type="text"
                        className="input_container"
                        id="Nome_escola"
                        placeholder="Nome da escola"
                    />
                    <hr className="hr_opacity" />
                </div>

                <div className="barra_porple"></div>
                <div className="container_Cadastro_itens">
                    <label htmlFor="" className="conteudo_container_cadastro">Nome da escola</label>
                    <input type="text"
                        className="input_container"
                        id="Nome_escola"
                        placeholder="Nome da escola"
                    />
                    <hr className="hr_opacity" />
                </div>


            </div>
        </div>
    )
}

export default Cadastro;