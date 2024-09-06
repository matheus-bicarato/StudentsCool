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
                            <img src={Icon2} alt="" />
                            <h1>Gestão Escolar</h1>
                        </div>
                        <p>A gestão escolar organiza e coordena
                            a escola, incluindo planejamento,
                            administração de recursos e supervisão
                            acadêmica, garantindo uma comunicação
                            eficaz e a melhoria contínua.</p>
                    </div>

                    <div className="Card">
                        <div className="Title_icon_LandPG">
                            <img src={Icon3} alt="" />
                            <h1>Sustentabilidade</h1>
                        </div>
                        <p>Escolas brasileiras enfrentam
                            desperdício de alimentos devido
                            à insatisfação com as refeições,
                            comunicação ineficaz entre cantina
                            e alunos, chamadas incorretas e
                            desperdício de papel com impressões.</p>
                    </div>
                </div>

                <div className="Servico">
                    <div className="Title_Servico_LangPG">
                        <h1>Serviços</h1>
                        <p>Conheça nosso  portfólio de serviços</p>
                    </div>

                    <div className="Servico_Card_LangPG">
                        <div className="Title_icon_LandPG">
                            <img src={Icon4} alt="" />
                            <h1>Cardápio</h1>
                        </div>
                        <p>A tela exibirá o cardápio semanal
                            e lanches diários. Alunos podem
                            escolher e avaliar lanches. A cantina
                            ajusta a produção e limita quantidades
                            com base no feedback. O cardápio
                            semanal é acessível apenas para
                            quem confirmar presença.</p>
                    </div>

                    <div className="Servico_Card_LangPG">
                        <div className="Title_icon_LandPG">
                            <img src={Icon5} alt="" />
                            <h1>Boletim</h1>
                        </div>
                        <p>O aluno poderá ver suas notas
                            e média por matéria e receberá
                            o boletim ao final de cada etapa,
                            ajudando a monitorar o desempenho
                            e identificar áreas com notas baixas.</p>
                    </div>

                    <div className="Servico_Card_LangPG">
                        <div className="Title_icon_LandPG">
                            <img src={Icon6} alt="" />
                            <h1>Chat</h1>
                        </div>
                        <p>Os chats por turma permitirão que
                            apenas os professores enviem mensagens,
                            arquivos e atividades. Haverá um mural
                            com datas importantes para ajudar os
                            alunos a se organizarem e a não perderem
                            conteúdo.</p>
                    </div>

                    <div className="Servico_Card_LangPG">
                        <div className="Title_icon_LandPG">
                            <img src={Icon7} alt="" />
                            <h1>Notícias</h1>
                        </div>
                        <p>Uma página exclusiva para notícias escolares
                            divulgará informações atualizadas, como
                            eventos, projetos estudantis e mudanças
                            no calendário</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage;