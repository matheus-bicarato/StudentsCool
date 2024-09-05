
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
            </main>
            <Footer />
        </div>
    )
}

export default Home;