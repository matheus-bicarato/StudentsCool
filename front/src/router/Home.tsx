
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import lapis from '../assets/imagens/lapis.png'
import './styles/Home.css'
import Carousel from '../components/Carousel';

const Home = () => {
    
    return (
        <div className="">
            <Header />
            <main className="main_home">
                <div className="main_top">
                    <Gallery />
                </div>
                <div className="main_low">
                    <h1 className='title_noticias'>
                        <img src={lapis} alt="lapis" />
                        Novas Informações
                    </h1>
                    <div className="">
                        <Carousel/>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;