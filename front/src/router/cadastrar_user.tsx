import Logo from '../assets/imagens/Logo_branco.png'
import { Link } from 'react-router-dom'
import './styles/cadastrar_user.css'
import DropdownSelect from '../components/dropdown';
const Cadastrar_user = () => {

    const options = [
        { id: 1, value: 'pao', label: 'Aluno' },
        { id: 2, value: 'maca', label: 'Cantina' },
        { id: 3, value: 'suco', label: 'ADM' },
    ];

    return (
        <div className="background_Login">
            <div >
                <Link to={"/"}><img className="Logo" src={Logo} alt="logo" /></Link>
            </div>
            <div className="form">
                <form action="" className='Inputs'>
                    <h1>Cadastre o usuário</h1>
                    <input type="text"
                        id="Uid"
                        placeholder='Uid Firebase'
                        className='button_padrao' />
                    <input type="text"
                        id="Name"
                        placeholder='Nome completo'
                        className='button_padrao' />
                    <input type="email"
                        id="email"
                        placeholder='E-mail'
                        className='button_padrao' />
                    <input type="number"
                        id="CPF"
                        placeholder='CPF'
                        className='button_padrao' />
                    <input type="number"
                        id="Telefone"
                        placeholder='Telefone'
                        className='button_padrao' />

                    <DropdownSelect title="Selecione a autoridade do usuário:" options={options} />
                    <button type="submit" className='Button_submit'>Enviar</button>
                    <Link to={"/contato"} className='Erro_login'>Erro em Cadastrar? entre em contato</Link>

                </form>
            </div>
        </div>
    )
}

export default Cadastrar_user;