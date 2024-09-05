import './styles/Erro-page.css'
import icon_error from '../assets/imagens/Error_Icon.png';
import logo_error from '../assets/imagens/Logo_Retangulo.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="main_erro">
            <h3 className='title_erro'>Error 404</h3>
            <img src={icon_error} alt="icon_Error" className='icon_Error' />
            <h1 className='subTitle_error'>Ops! Não encontamos <br /> essa página</h1>
            <img src={logo_error} alt="logo_error" className='logo_error' />
            <Link to={"/cadastro"}><button className="button_error_page">Voltar para a página inicial</button></Link>
        </div>
    )
}

export default Error;