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
      {/* Parte1 */}
      <div className="Container_1">
        <h1 className="Title_1">Aplicativo Oficial do Studentscool</h1>
        <div className="Phone_Number">
          <a href="*">
            <img src={Phone} alt="" />
          </a>
          <h1>+55 11 97044-1052</h1>
        </div>
      </div>

      {/* Parte2 */}
      <div className="Container_2">
        <div className="Rede_Pag">

        <div className="Social_cont">
          <h1 className="Title_2">Redes sociais do studentscool:</h1>
          <div className="Social_Icons">
            <a href="*">
              <img src={Face} alt="" />
            </a>
            <a href="*">
              <img src={Insta} alt="" />
            </a>
            <a href="*">
              <img src={X} alt="" />
            </a>
            <a href="*">
              <img src={TikTok} alt="" />
            </a>
          </div>
        </div>

        <div className="Pags_Cont">
          <h1>Páginas:</h1>
          <div className="Lists">
          <ul className="Pages">
                <li><a href="#">aluno</a></li>
                <li><a href="#">professor</a></li>
                <li><a href="#">login</a></li>
                <li><a href="#">cadastro</a></li>
                <li><a href="#">home</a></li>
          </ul>

          <ul className="Pages">
                <li><a href="#">cardápio</a></li>
                <li><a href="#">chamada</a></li>
                <li><a href="#">notícia</a></li>
                <li><a href="#">boletim</a></li>
          </ul>
          </div>
          </div>
          
        </div>
        <div className="LogoBranco">
        <a href="*"><img src={LogoB} alt=""/></a>
        </div>
      </div>
    
    <div className="Container_3">
      <h1>
        Copyright © 1997-2024 Colégio Objetivo. Todos os direitos reservados.
      </h1>
      </div>
    </footer>
  );
};

export default Footer;
