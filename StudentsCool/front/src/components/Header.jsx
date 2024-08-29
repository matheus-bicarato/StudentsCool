import { Link } from "react-router-dom";

import logo from '../assets/imagens/logo_lapis.png'
import perfil from '../assets/imagens/Perfil.png'
import porta from '../assets/imagens/Porta.png'
import './styles/Header.css'

const Header = () => {
    return (
        <header className='Navbar'>
            <div className="logo">
                <Link to={"/"}><img className="logo" src={logo} alt="logo" /></Link>
            </div>
            <div className="perfil">
                <Link to={"/"}><img className='img-perfil' src={perfil} alt="perfil" /></Link>
                <h2 className='user'>Rafaela Alonso dos Anjos <br /> <span className="subUser">STUDENTSCOOL</span></h2>
                <Link to={"/Cadastro"}><img className="porta" src={porta} alt="porta" /></Link>
            </div>
        </header>
    )
}
export default Header;