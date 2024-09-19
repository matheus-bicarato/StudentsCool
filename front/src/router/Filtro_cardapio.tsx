import Button_container_cardapio from '../components/button_cardapio';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/filtro_cardapio.css'

const Filtro_cardapio = () => {
    return (
        <div className="">
            <Header/>
            <div className="main_filtro_cardapio">
                <Button_container_cardapio/>
            </div>
            <Footer/>
        </div>
    )
}

export default Filtro_cardapio;