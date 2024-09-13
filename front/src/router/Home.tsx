
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/Home.css'
import Gallery_alunos from '../components/Gallery_alunos';
import Gallery_cantina from '../components/Gallery_cantina';
import Gallery_adm_geral from '../components/Gallery_adm_geral';
import Gallery_adm_escola from '../components/Gallery_adm_escola';


const Home = () => {
    
    return (
        <div className="">
            <Header />
            <main className="main_home">
                <div className="main_top">
                    <Gallery_alunos />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;