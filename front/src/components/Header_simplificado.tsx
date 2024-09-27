import { Link } from "react-router-dom";
import Logo_lapis from "../assets/imagens/Logo_Lapis.png"
import Logo_bola from "../assets/imagens/Logo_branco.png"

import '../components/styles/Header_simplificado.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase_connect";
import axios from "axios";
import { useEffect, useState } from "react";

const Header_simplificado = () => {
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

    const handleLogout = () => {
        auth.signOut().then().catch((error) => {
            alert(error)
        })
    }

    if(user) {
        return (
            <header className="Simple_Header">
                <div className="right">
                    <Link to={"/"}><img src={Logo_lapis} alt="Logo" className="Logo_lapis" /></Link>
                </div>
                <div className="left">
                    <Link to={"/"}><img src={Logo_bola} alt="Logo" className="Logo_bola" /></Link>
                    <div className="Title_Header">
                        <h1>Olá {userInfo ? `Olá ${userInfo.nome.split(' ').slice(0, 2).join(' ')}!` : "Carregando..."} <br />

                            <Link className="span" to={"/home"}><span>Clique aqui</span></Link> <button onClick={() => handleLogout()}>Sair da conta</button> <br />
                            para entrar na home !</h1>
                    </div>
                </div>
            </header>
        )
    } else {
        return (
            <header className="Simple_Header">
                <div className="right">
                    <Link to={"/"}><img src={Logo_lapis} alt="Logo" className="Logo_lapis" /></Link>
                </div>
                <div className="left">
                    <Link to={"/"}><img src={Logo_bola} alt="Logo" className="Logo_bola" /></Link>
                    <div className="Title_Header">
                        <h1><Link className="span" to={"/Login"}><span>Clique aqui</span></Link> <br />
                            para fazer o login !</h1>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header_simplificado;
