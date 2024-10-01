import { Link } from "react-router-dom";

import logo from '../assets/imagens/Logo_Lapis.png'
import perfil from '../assets/imagens/Perfil.png'
import porta from '../assets/imagens/Porta.png'
import './styles/Header.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase_connect";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
    const [userInfo, setUserInfo] = useState(null)
    const [user] = useAuthState(auth);

    let userUid;

    useEffect(() => {
        if(user) {
            userUid = user.uid;

            axios.get(`http://localhost:8080/users/${userUid}`)
                .then(response => setUserInfo(response.data))
                .catch(error => console.log(`Erro ao puxar infos do usuário: ${error.message}`))
        }
    }, [user])

    if(user) {
        return (
            <header className='Navbar'>
                <div className="Content_Logo_Header">
                    <Link to={"/"}><img className="Logo_Header" src={logo} alt="logo" /></Link>
                </div>
                <div className="perfil">
                    <Link to={"/"}><img className='img-perfil' src={perfil} alt="perfil" /></Link>
                    <h2 className='user'>{userInfo ? `Olá ${userInfo.nome.split(' ').slice(0, 2).join(' ')}!` : "Carregando..."} <br /> <Link to={"/Cadastro"}><span className="subUser">STUDENTSCOOL</span></Link></h2>
                    <Link to={"/Login"}><img className="porta" src={porta} alt="porta" /></Link>
                </div>
            </header>
        )
    }
}
export default Header;