
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import './styles/Home.css'


const Home = () => {
    return (
        <div className="">
            <Header />
            <main className="main">
                <div className="main_top">
                    <Gallery />
                </div>
                <div className="main_low">

                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;