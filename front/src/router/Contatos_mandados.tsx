import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/contato_mandados.css'


const Contatos_mandados = () => {
    return (
        <div className="">
            <Header />
            <div className="main_contato_mandados">
                <div className="title_contato_container">
                    <h1 className='title_contatos_mandados'>Feedbacks</h1>
                </div>
                <div className="contato-card">
                    <div className="contato-card__header">
                        <h1 className="contato-card__name">Matheus Ramos Bicarato</h1>
                    </div>
                    <div className="contato-card__description">
                        <h2 className="contato-card__description-title">Mensagem</h2>
                        <p className="contato-card__description-text">
                            Com diabetes tipo 2, sua alimentação precisa ser cuidadosamente planejada para
                            manter os níveis de açúcar no sangue sob controle. Desde o diagnóstico, ele passou a
                            adotar um estilo de vida mais saudável, priorizando alimentos integrais, vegetais frescos
                            e proteínas magras.
                        </p>
                    </div>
                </div></div>

            <Footer />
        </div>
    )
}

export default Contatos_mandados;