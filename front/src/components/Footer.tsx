import { Link } from "react-router-dom";

import Phone from "../assets/imagens/Phone_Icon.png";
import Face from "../assets/imagens/Face_Icon.png";
import Insta from "../assets/imagens/Insta_Icon.png";
import TikTok from "../assets/imagens/TikTok_Icon.png";
import LogoB from "../assets/imagens/Logo_Branco.png";

import "./styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            {/* PART_1 */}
            <div className="Container_Footer_1">
                <h1 className="Title_Footer_1">Site Oficial do Studentscool</h1>
                    <Link to={"/"} className="Phone_Number">
                    <img src={Phone} alt=""/>
                    <h1 className="Number">+55 11 97044-1052</h1>
                    </Link>
            </div>

            {/* PART_2 */}
            <div className="Container_Footer_2">
                <div className="Block_Footer_1">
                    <div className="Block_Footer_2">
                        <h1 className="Title_Footer_2">Redes sociais do studentscool:</h1>
                        <div className="Redes_Footer">
                            <a href=""><img src={Face} alt="" /></a>
                            <a href=""><img src={Insta} alt="" /></a>
                            <a href=""><img src={TikTok} alt="" /></a>
                        </div>
                    </div>

                    
                    <div className="Block_Footer_3">
                        <h1 className="Title_Footer_3">Páginas:</h1>
                        <div className="Container_Pages_Footer">
                            <ul className="Pages_Footer">
                                <li><Link to={"/"}>aluno</Link></li>
                                <li><Link to={"/"}>professor</Link></li>
                                <li><Link to={"/"}>login</Link></li>
                                <li><Link to={"/"}>cadastro</Link></li>
                                <li><Link to={"/"}>home</Link></li>
                            </ul>
                            <ul className="Pages_Footer">
                                <li><Link to={"/"}>cardápio</Link></li>
                                <li><Link to={"/"}>noticia</Link></li>
                                <li><Link to={"/"}>boletim</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Logo_Footer">
                    <Link to={"/"} ><img src={LogoB} alt="" /></Link>
                </div>
            </div>

            {/* PART_3 */}
            <div className="Container_Footer_3">
                <h1 className="Title_Footer_4">Copyright © 2024-2024 STUDENTSCOOL. Todos os direitos reservados.</h1>
            </div>
        </footer>
    )
}

export default Footer;