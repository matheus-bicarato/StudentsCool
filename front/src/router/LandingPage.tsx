import Header_simplificado from "../components/Header-simplificado";
import Footer from "../components/Footer";

import Banner from "../assets/imagens/banner_landingPG.png";
import Icon1 from "../assets/imagens/Icon_lang1.png"
import Icon2 from "../assets/imagens/Icon_lang2.png"
import Icon3 from "../assets/imagens/Icon_lang3.png"
import Icon4 from "../assets/imagens/Icon_lang4.png"
import Icon5 from "../assets/imagens/Icon_lang5.png"
import Icon6 from "../assets/imagens/Icon_lang6.png"
import Icon7 from "../assets/imagens/Icon_lang7.png"

import './styles/LandingPage.css'

const LandingPage = () => {
    return (
        <div>
            <Header_simplificado />
            <main>
                <div className="Banner_LandPG">
                    <img src={Banner} alt=""  />
                </div>
                <div className="Cards">
                    <div className="Card">
                        <div className="Title_icon_LandPG">
                            <img src={Icon1} alt="" />
                            <h1>Comunicação</h1>
                        </div>
                        <p>A comunicação entre alunos e
                        professores é assegurada por 
                        chats por turma, uma página de 
                        notícias escolares e o acompanhamento
                        do progresso acadêmico, que inclui 
                        boletins para facilitar a organização 
                        e o desempenho.</p>
                    </div>
                    
                    <div className="Card">
                        <div className="Title_icon_LandPG">
                            <img src={Icon1} alt="" />
                            <h1>Comunicação</h1>
                        </div>
                        <p>A comunicação entre alunos e
                        professores é assegurada por 
                        chats por turma, uma página de 
                        notícias escolares e o acompanhamento
                        do progresso acadêmico, que inclui 
                        boletins para facilitar a organização 
                        e o desempenho.</p>
                    </div>

                    <div className="Card">
                        <div className="Title_icon_LandPG">
                            <img src={Icon1} alt="" />
                            <h1>Comunicação</h1>
                        </div>
                        <p>A comunicação entre alunos e
                        professores é assegurada por 
                        chats por turma, uma página de 
                        notícias escolares e o acompanhamento
                        do progresso acadêmico, que inclui 
                        boletins para facilitar a organização 
                        e o desempenho.</p>
                    </div>
                    
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage;