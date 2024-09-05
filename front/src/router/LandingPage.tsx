import Header_simplificado from "../components/Header-simplificado";
import Footer from "../components/Footer";

import Banner from "../assets/imagens/banner_landingPG.png";

import './styles/LandingPage.css'

const LandingPage = () => {
    return (
        <div>
            <Header_simplificado />
            <main>
                <div className="Banner_LandPG">
                    <img src={Banner} alt=""  />
                </div>
                <div className="Cards">
                    <div className="Card_1">
                        <div className="Title_icon_LandPG">
                            <img src="" alt="" />
                            <h1></h1>
                        </div>
                        <p></p>
                    </div>
                    
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage;