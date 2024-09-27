import Header from '../components/Header';
import Footer from '../components/Footer';


import ZAP from '../assets/imagens/Zap_Icon.png';
import EMAIL from '../assets/imagens/Email_Icon.png';
import  INSTA from '../assets/imagens/Insta_Black_Icon.png'
import Retangulo from '../assets/imagens/Logo_Retangulo.png'

import './styles/Contato.css'

const Contato = () => {
    return (
    <div>
        <Header/>
        <main className='main_contato'>
            <div className='Duvidas_cont_contato'>
                <h1 className='Duvida_contato'>
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
                        

                        <li><a href="" >
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

            <form className='Form_contato'>

                <div className='Title_form_contato'>
                    <span className='Contato_span'><h1>Nos envie uma mensagem</h1></span>
                    <hr/>
                </div>

                <div className='Inputs_form_contato'>
                <input type="text"
                        placeholder='Nome Completo'
                        className='Nome_contato' 
                        maxLength={300} 
                        required/>

                        <div className='Email_tel_contato'>
                            <input 
                            type="email"
                            id='email'
                            placeholder='E-mail'
                            className='Email_contato' 
                            required/>

                            <input type="tel"
                            placeholder='Telefone'
                            className='Tel_contato '
                            maxLength={11} 
                            required/>
                        </div>

                        <textarea
                                placeholder='Mensagem...'
                                className='Mensagem_contato' 
                                maxLength={300}
                                required/>
                </div>
                <img src={Retangulo} alt="" className='Logo_contato'/>
                <button type="submit" className='Button_submit_contato'>Enviar</button>
            </form>
        </main>
        <div className='Footer_contato'>
            <Footer />
        </div>
    </div>
    )
}

export default Contato;