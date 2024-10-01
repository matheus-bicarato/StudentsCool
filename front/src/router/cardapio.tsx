import Footer from '../components/Footer';
import Header from '../components/Header';
import img_cardapio from "../assets/imagens/cardapio.png"
import './styles/Cardapio.css'
import { Link } from 'react-router-dom';


const Cardapio = () => {
    return (
        <div className="">
            <Header />
            <main className="main_cardapio">
                <div className="main_cardapio_top">
                    <div className="container_title_cardapio">
                        <h1 className='title_cardapio'>Veja o cardápio dessa <span className='span_cardapio'>Semana!</span></h1>
                    </div>
                    <img className='img_cardapio' src={img_cardapio} alt="cardapio" />
                    <div className="button_container_flex">
                        <div className="container_cardapio_button">
                            <Link to={"/"}><button className="button_cardapio">AVALIE O NOSSO CARDÁPIO</button></Link>
                        </div>
                        <div className="container_cardapio_button2">
                            <Link to={"/Filtro_cardapio"}><button className="button_cardapio">VEJA AS POÇÔES!</button></Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Cardapio;