import './styles/Add_cardapio.css'
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/filtro_cardapio.css'
import '../components/styles/Checkbox.css'
import Input_Add_cardapio from '../components/input_add_cardapio'

const Add_cardapio = () => {
    return (
        <div>
            <Header />
            <div className="">
                <Input_Add_cardapio />
            </div>
            <Footer />
        </div>
    )
}

export default Add_cardapio;