
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import lapis from '../assets/imagens/lapis.png'
import './styles/Home.css'
import Carousel from '../components/Carousel';

import image1 from '../assets/imagens/banner_atencao.png'
import image2 from '../assets/imagens/banner_cardapio.png'
import image3 from '../assets/imagens/banner_cardapio.png'

const Home = () => {
    const images = [image1, image2, image3]
    return (
        <div className="">
            <Header />
            <main className="main">
                <div className="main_top">
                    <Gallery />
                </div>
                <div className="main_low">
                    <h1 className='title_noticias'>
                        <img src={lapis} alt="lapis" />
                        Novas Informações
                    </h1>
                    <div className="">
                        <Carousel items={images} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;