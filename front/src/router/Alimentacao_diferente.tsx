import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/alimentacao_especiais.css'


const Alimentacao_diferente = () => {
    return (
        <div className="">
            <Header />
            <div className="main_alimentação_fresco">
                <h1 className='title_alimentacao_fescos'>Alimentação especiais</h1>
                <div className="medical-card">
                    <div className="medical-card__header">
                        <h1 className="medical-card__name">Matheus Ramos Bicarato</h1>
                    </div>
                    <div className="medical-card__description">
                        <h2 className="medical-card__description-title">Descrição</h2>
                        <p className="medical-card__description-text">
                            Com diabetes tipo 2, sua alimentação precisa ser cuidadosamente planejada para
                            manter os níveis de açúcar no sangue sob controle. Desde o diagnóstico, ele passou a
                            adotar um estilo de vida mais saudável, priorizando alimentos integrais, vegetais frescos
                            e proteínas magras.
                        </p>
                    </div>
                    <button className="medical-card__download-button">
                        Baixar Arquivo Médico
                        <span className="medical-card__download-icon">📥</span>
                    </button>
                </div></div>

            <Footer />
        </div>
    )
}

export default Alimentacao_diferente;