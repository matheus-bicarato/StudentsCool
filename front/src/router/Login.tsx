import Logo from '../assets/imagens/Logo_branco.png'
import './styles/Login.css'
const Login = () => {
    return (
        <div className="background">
            <div >
                <img className="Logo" src={Logo} alt="logo" />
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
                        <a href="https://www.youtube.com/watch?v=M3_XrtBGJJ0">Esqueci a senha</a>
                </form>
            </div>
        </div>
    )
}

export default Login;