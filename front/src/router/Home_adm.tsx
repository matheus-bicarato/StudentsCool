
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery_alunos';
import './styles/Home.css'

const Home_Adm = () => {
    
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

export default Home_Adm;