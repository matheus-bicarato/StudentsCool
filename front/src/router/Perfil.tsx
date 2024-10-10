import SchoolCard from '../components/SchoolCard';
import './styles/Perfil.css'
import profileImage from '../assets/imagens/gorila.jpg';


const Perfil = () => {
    return (
        <div className="main_perfil">
            <div className="container_perfil">
                <div className="img_perfil">
                    <img className='url_img_perfil' src={profileImage} alt="perfil" />
                </div>
                <div className="conteudo_perfil">
                    <div className="container_name"><h1> Alice Ramos Duarte Dos Anjos Pantaleão</h1></div>
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
            
            <div className="container_name_escola">

            </div>
        </div>
    )
}

export default Perfil;