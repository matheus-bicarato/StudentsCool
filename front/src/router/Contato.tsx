import Header from '../components/Header';

import ZAP from '../assets/imagens/Zap_Icon.png';
import EMAIL from '../assets/imagens/Email_Icon.png';
import  INSTA from '../assets/imagens/Insta_Black_Icon.png'

import './styles/Contato.css'

const Contato = () => {
    return (
    <div>
        <Header/>
        <main>
            <div>
                <h1>
                    Alguma dúvida?
                    <br />
                    Entre em contato com a gente agora mesmo!
                </h1>
                
                <div className="contatos">
                    <ul className="contatosUl">
                        <li><a href="">
                            <span><img src={ZAP} alt="ZAP" /></span>
                            <h1>(11) 97044-1052</h1>
                        </a></li>

                        <li><a href="">
                            <span><img src={EMAIL} alt="" /></span>
                            <h1>studentscool@gmail.com</h1>
                            </a></li>

                        <li><a href="">
                        <span><img src={INSTA} alt="" /></span>
                            <h1>@studentscool</h1>
                        </a></li>
                    </ul>
                </div>
            </div>
            <div>
                

            </div>
        </main>
    </div>
    )
}

export default Contato;