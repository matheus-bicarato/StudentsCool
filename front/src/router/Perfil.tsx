import SchoolCard from '../components/SchoolCard';
import './styles/Perfil.css'
import profileImage from '../assets/imagens/gorila.jpg';
import perfil_email from '../assets/imagens/perfil-email.png';
import perfil_telefone from '../assets/imagens/perfil-telefone.png';
import perfil_cpf from '../assets/imagens/perfil-cpf.png';
import perfil_escola from '../assets/imagens/perfil-escola.png';
import Header from '../components/Header';
import Footer from '../components/Footer';



const Perfil = () => {
    return (
        <div className="">
            <Header />
            <div className="main_perfil">
                <div className="container_perfil">
                    <div className="img_perfil">
                        <img className='url_img_perfil' src={profileImage} alt="perfil" />
                    </div>
                    <div className="conteudo_perfil">
                        <div className="container_name"><h1> Aline Ramos Duarte Dos Anjos Pantaleão</h1></div>
                        <div className="itens_perfil">
                            <h1><span className='span_perfil'>Email</span>: flormembro@studentscool.com</h1>
                            <hr />
                            <h1><span className='span_perfil'>CPF</span>: XXX-XXX-XXX-XX</h1>
                            <hr />
                            <h1><span className='span_perfil'>Telefone</span>: XX XXXX-XXXX</h1>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="title_perfil_escola">
                    <img src={perfil_escola} width={'50px'} alt="escola" />
                    <h1 className='font_escola'>Escola</h1>
                </div>
                <div className="container_name_escola">
                    <h1>Colégio Novo Horizonte</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Perfil;