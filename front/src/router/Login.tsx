import Logo from '../assets/imagens/Logo_branco.png'
import { Link } from 'react-router-dom'
import './styles/Login.css'
const Login = () => {
    return (
        <div className="background">
            <div >
                <Link to={"/"}><img className="Logo" src={Logo} alt="logo" /></Link>
            </div>
            <div className="form">
                <form action="" className='Inputs'>
                    <h1>Login StudentsCool</h1>
                    <input type="email"
                        id="email"
                        placeholder='E-mail'
                        className='email' />
                    <input type="password"
                        id="Pass"
                        placeholder='Digite sua senha'
                        className='pass' />
                    <a href="https://www.youtube.com/watch?v=M3_XrtBGJJ0" className='esqueci_pass'>Esqueci a senha</a>
                    <button type="submit" className='Button_submit'>Enviar</button>
                    <a href="" className='Erro_login'>Erro em login? entre em contato</a>
                </form>
            </div>
        </div>
    )
}

export default Login;