
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/Home.css'
import Gallery_adm from '../components/Gallery_adm';
import Gallery_alunos from '../components/Gallery_alunos';
import Gallery_cantina from '../components/Gallery_cantina';


const Home = () => {
    
    return (
        <div className="">
            <Header />
            <main className="main_home">
                <div className="main_top">
                    <Gallery_adm />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;