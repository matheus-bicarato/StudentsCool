import { Link } from "react-router-dom";

import logo from '../assets/imagens/logo_lapis.png'
import perfil from '../assets/imagens/Perfil.png'
import porta from '../assets/imagens/Porta.png'
import './styles/Header.css'

const Header = () => {
    return (
        <header className='Navbar'>
            <div className="Content_Logo_Header">
                <Link to={"/"}><img className="Logo_Header" src={logo} alt="logo" /></Link>
            </div>
            <div className="perfil">
                <Link to={"/"}><img className='img-perfil' src={perfil} alt="perfil" /></Link>
                <h2 className='user'>Rafaela Alonso dos Anjos <br /> <Link to={"/Cadastro"}><span className="subUser">STUDENTSCOOL</span></Link></h2>
                <Link to={"/Login"}><img className="porta" src={porta} alt="porta" /></Link>
            </div>
        </header>
    )
}
export default Header;