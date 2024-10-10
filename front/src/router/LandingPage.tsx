import Header_simplificado from "../components/Header_simplificado";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import { Link } from 'react-router-dom';

import BannerAPP from "../assets/imagens/APPbanner_landing_page.png";

import Icon1 from "../assets/imagens/Icon_lang1.png"
import Icon2 from "../assets/imagens/Icon_lang2.png"
import Icon3 from "../assets/imagens/Icon_lang3.png"
import Icon4 from "../assets/imagens/Icon_lang4.png"
import Icon_Grafico from "../assets/imagens/Icon_Gráfico_langPG.png"
import Grafico from "../assets/imagens/Gráfico_langPG.png"
import IconHouse from "../assets/imagens/Icon_House.png"

// SLide
import imagem1 from "../assets/imagens/Banner_landingPG_1.png";
import imagem2 from "../assets/imagens/Banner_landingPG_2.png";
import imagem3 from "../assets/imagens/Banner_landingPG_3.png";

import './styles/LandingPage.css'

const LandingPage = () => {

    const images = [imagem1, imagem2];

    return (
        <div>
            <Header_simplificado />
            <main>
                <div className="Container_slide_show">
                    <div className="slide_show">
                        <Slide images={images} />
                    </div>
                </div>

                <div className="Servico">
                    <div className="Title_Servico_LangPG">
                        <h1>Desperdício de Alimento</h1>
                        <p>Conheça os motivos do desperdício</p>
                    </div>

                    <div className="Servico_quadros_LangPG">
                        <div className="Servico_Card_LangPG">
                            <div className="Title_icon_LandPG">
                                <img src={Icon1} alt="" />
                                <h1>Porções Excessivas</h1>
                            </div>
                            <p> Muitas vezes, as escolas servem porções
                                maiores do que os alunos conseguem
                                consumir, resultando em grande quantidade
                                de alimentos que acabam sendo jogados fora.</p>
                        </div>

                        <div className="Servico_Card_LangPG">
                            <div className="Title_icon_LandPG">
                                <img src={Icon2} alt="" />
                                <h1>Falta de Planejamento e Coordenação</h1>
                            </div>
                            <p>A falta de planejamento e coordenação nas
                                escolas causa desperdício de alimentos devido
                                à preparação excessiva e má gestão das refeições.
                                Melhorar esses aspectos é crucial para reduzir o
                                desperdício e usar os recursos de forma mais eficiente.</p>
                        </div>
                    </div>

                    <div className="Servico_quadros_LangPG">
                        <div className="Servico_Card_LangPG">
                            <div className="Title_icon_LandPG">
                                <img src={Icon3} alt="" />
                                <h1>Preferências Alimentares e Escolhas Limitadas</h1>
                            </div>
                            <p>As refeições oferecidas podem não
                                corresponder às preferências dos alunos ou
                                não serem adequadas para todas as necessidades
                                dietéticas. Isso pode levar a uma baixa aceitação
                                dos alimentos, com muitos sendo deixados no</p>
                        </div>

                        <div className="Servico_Card_LangPG">
                            <div className="Title_icon_LandPG">
                                <img src={Icon4} alt="" />
                                <h1>Preparação e Apresentação</h1>
                            </div>
                            <p>Se a comida não for preparada de maneira
                                atraente ou saborosa, é mais provável que os
                                alunos não a consumam. Problemas na preparação
                                e na apresentação dos alimentos podem levar a
                                uma maior quantidade de restos.</p>
                        </div>
                    </div>
                </div>

                <div className="divider">
                    <span className="divider-text">//</span>
                </div>

                <div className="Container_Grafico_landingPG">
                    <div className='Text_graf_LandPG'>
                        <h1>Grafico</h1>
                        <img src={Icon_Grafico} alt="" />
                    </div>
                    <div className="Block_Grafico_landingPG">
                        <img src={Grafico} alt="" className="Grafico_landingPG" />
                    </div>
                </div>

                <div className="divider">
                    <span className="divider-text">//</span>
                </div>

                <div className="Sobre_Container_LangPG">
                    <div className="BannerAPP_LangPG">
                        <Link to={"/Cadastro"}>
                            <img src={imagem3} alt="" />
                        </Link>
                    </div>

                    <div className="Text_banner3_LangPG">

                        <div className='Text_image3_LandPG'>
                            <h1>StudentsCool</h1>
                            <img src={IconHouse} alt="" />
                        </div>
                        <p className="P_banner3_LangPG">O STUDENTSCOOL é uma proposta de plataforma destinada a combater o
                            desperdício de alimentos nas escolas. Atualmente, o controle do
                            cardápio e as intenções de consumo dos alunos são realizados de
                            forma manual. Nas escolas, os funcionários da cantina perguntam
                            quantas pessoas estão presentes na sala de aula, mas essa
                            abordagem gera uma margem de erro significativa, resultando na
                            falta de precisão nos dados sobre a quantidade de alunos que
                            realmente irão se alimentar. Além disso, muitos alunos podem não
                            comer, e a escola muitas vezes não tem conhecimento do motivo exato
                            para isso. Desenvolvida a partir de pesquisas sobre desperdício de
                            alimentos e comunicação escolar, a solução visa reduzir o desperdício
                            e melhorar a eficiência na gestão alimentar, tornando-se uma ferramenta
                            acessível e eficaz para todas as escolas. Com o STUDENTSCOOL, os alunos
                            poderão visualizar o cardápio, indicar suas intenções de consumo e
                            fornecer feedback, otimizando a comunicação entre alunos e a cantina.
                            A plataforma também facilitará o fluxo de trabalho da cozinha, permitindo
                            uma melhor organização na preparação dos alimentos.</p>
                    </div>
                </div>

                <div className="BannerAPP_LangPG">
                    <img src={BannerAPP} alt="" />
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default LandingPage;