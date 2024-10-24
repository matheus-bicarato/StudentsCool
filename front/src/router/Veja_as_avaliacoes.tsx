import Footer from '../components/Footer';
import Header from '../components/Header';
import { FaStar } from 'react-icons/fa';
import './styles/Veja_as_avaliacoes.css'


const Veja_as_avaliacoes = () => {
    return (
        <div className="">
            <Header />

            <div className="Main_vj_avaliacoes">
                <div >
                    <h1 className="Title_vj_avaliacoes"><span className='span_Title_vj_avaliacoes'>Veja</span> as avaliações!</h1>
                </div>

                <div className="container_vj_avaliacoes">
                    <h1>Lanche da Manhã: </h1>
                    <div className="container_vj_estrela">
                        <h3>Avaliação: 4 <FaStar /> </h3>
                    </div>
                </div>

                <div className="container_vj_avaliacoes">
                    <h1>Almoço: </h1>
                    <div className="container_vj_estrela">
                        <h3>Avaliação: 4 <FaStar /> </h3>
                    </div>
                </div>

                <div className="container_vj_avaliacoes">
                    <h1>Lanche da tarde: </h1>
                    <div className="container_vj_estrela">
                        <h3>Avaliação: 4 <FaStar /> </h3>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Veja_as_avaliacoes;