import CheckboxList1 from '../components/checklist/Checkbox_list1';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/filtro_cardapio.css'

const Filtro_cardapio = () => {
    return (
        <div className="">
            <Header />
            <div className="main_filtro_cardapio">
                <h1 className='title_cardapio'>Veja o cardápio dessa <span className='span_cardapio'>Semana!</span></h1>
                <CheckboxList1 />
            </div>
            <Footer />
        </div>
    )
}

export default Filtro_cardapio;