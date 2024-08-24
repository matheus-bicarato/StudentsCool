import Phone from '../assets/imagens/Phone_Icon.png'
import Face from '../assets/imagens/Face_Icon.png'
import Insta from '../assets/imagens/Insta_Icon.png'
import X from '../assets/imagens/X_Icon.png'
import TikTok from '../assets/imagens/TikTok_Icon.png'
import LogoB from '../assets/imagens/Logo_Branco.png'

const Footer = () => {
    return (
        <footer>
            <h1>Aplicativo Oficial do Studentscool</h1>
            <div>
                <a href='*'><img src={Phone} alt="" /></a><h1>+55 11 97044-1052</h1>
                </div>
            <div>
                
                <div>
                    <h1>Redes sociais do studentscool:</h1>
                    <div>
                        <a href='*'><img src={Face} alt="" /></a>
                        <a href='*'><img src={Insta} alt="" /></a>
                        <a href='*'><img src={X} alt="" /></a>
                        <a href='*'><img src={TikTok} alt="" /></a>
                        
                        <form>
                            <h1>Páginas:</h1>
                            <ul>
                                <li><a href="*">aluno</a></li>
                                <li><a href="*">professor</a></li>
                                <li><a href="*">login</a></li>
                                <li><a href="*">cadastro</a></li>
                                <li><a href="*">home</a></li>
                            </ul>
                            <ul>
                            <li><a href="*">cardápio</a></li>
                                <li><a href="*">chamada</a></li>
                                <li><a href="*">notícia</a></li>
                                <li><a href="*">boletim</a></li>
                            </ul>
                        </form>

                        <a href='*'><img src={LogoB} alt="" /></a>
                    </div>
                    <h1>Copyright © 1997-2024 Colégio Objetivo. Todos os direitos reservados.</h1>
                </div>
            </div>

        </footer>
    )
}

export default Footer;