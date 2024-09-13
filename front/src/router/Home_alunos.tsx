
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/Home.css'
import Gallery_alunos from '../components/Gallery_alunos';

const Home_alunos = () => {
    
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

export default Home_alunos;