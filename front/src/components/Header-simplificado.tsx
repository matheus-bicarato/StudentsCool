import { Link } from "react-router-dom";
import Logo_lapis from "../assets/imagens/Logo_Lapis.png"
import Logo_bola from "../assets/imagens/Logo_branco.png"


const Header_simplificado = () => {
    return (
        <header>
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

export default Header_simplificado;