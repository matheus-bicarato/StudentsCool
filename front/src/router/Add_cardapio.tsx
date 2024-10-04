import './styles/Add_cardapio.css'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Input_Add_cardapio1 from '../components/Input_add_cardapio1'
import Input_Add_cardapio2 from '../components/Input_add_cardapio2'
import Input_Add_cardapio3 from '../components/Input_add_cardapio3'


const Add_cardapio = () => {
    return (
        <div>
            <Header />
            <div className="container_main_add_cardapio">
                <Input_Add_cardapio1 />
                <Input_Add_cardapio2 />
                <Input_Add_cardapio3 />
            </div>
            <Footer />
        </div>
    )
}

export default Add_cardapio;