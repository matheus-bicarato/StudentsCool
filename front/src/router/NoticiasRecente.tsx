import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import HamburgerMenu from '../components/HamburgerMenu';

import './styles/Notícias.css'


const NoticiasRecente = () => {
    return(
        <div>
            <Header/>
            <main className='Main_Notícias'>
                

                <div >
                    <div className='Title_Line'>
                        <HamburgerMenu/>
                        <h1>Recentes</h1>
                        <hr className='Line'/>
                    </div>
                    <Carousel/>
                </div>


            </main>
            <Footer/>
     
        </div>
    )
}

export default NoticiasRecente;