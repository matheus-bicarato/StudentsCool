import { Link } from "react-router-dom";

import Phone from "../assets/imagens/Phone_Icon.png";
import Face from "../assets/imagens/Face_Icon.png";
import Insta from "../assets/imagens/Insta_Icon.png";
import X from "../assets/imagens/X_Icon.png";
import TikTok from "../assets/imagens/TikTok_Icon.png";
import LogoB from "../assets/imagens/Logo_Branco.png";

import "./styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            {/* PART_1 */}
            <div className="Container_Footer_1">
                <h1 className="Title_Footer_1">Aplicativo Oficial do Studantscool</h1>
                <div className="Phone_Number">
                    <a href="#"><img src={Phone} alt="" />+55 11 97044-1052</a>
                </div>
            </div>

            {/* PART_2 */}
            <div className="Container_Footer_2">
                <div className="Block_Footer_1">
                    <div className="Block_Footer_2">
                        <h1 className="Title_Footer_2">Redes sociais do studantscool:</h1>
                        <div className="Redes_Footer">
                            <a href=""><img src={Face} alt="" /></a>
                            <a href=""><img src={Insta} alt="" /></a>
                            <a href=""><img src={X} alt="" /></a>
                            <a href=""><img src={TikTok} alt="" /></a>
                        </div>
                    </div>

                    {/* PART_3 */}
                    <div className="Block_Footer_3">
                        <h1 className="Title_Footer_3">Páginas:</h1>
                        <div className="Container_Pages_Footer">
                            <ul className="Pages_Footer">
                                <li><a href="">aluno</a></li>
                                <li><a href="">professor</a></li>
                                <li><a href="">login</a></li>
                                <li><a href="">cadastro</a></li>
                                <li><a href="">home</a></li>
                            </ul>
                            <ul className="Pages_Footer">
                                <li><a href="">cardápio</a></li>
                                <li><a href="">chamada</a></li>
                                <li><a href="">noticia</a></li>
                                <li><a href="">boletim</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Logo_Footer">
                    <a href=""><img src={LogoB} alt="" /></a>
                </div>
            </div>

            {/* PART_2 */}
            <div className="Container_Footer_3">
                <h1 className="Title_Footer_4">Copyright © 1997-2024 Colégio Objetivo. Todos os direitos reservados.</h1>
            </div>
        </footer>
    )
}

export default Footer;