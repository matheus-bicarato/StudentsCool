import Logo from '../assets/imagens/Logo_branco.png'
import { Link } from 'react-router-dom'
import './styles/Login.css'
import '../../firebase_connect'
import { auth } from '../../firebase_connect'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Swal from 'sweetalert2'

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [user] = useAuthState(auth);

    const handleLogin = (e) => {
        e.preventDefault(); // Previne o reload da página
        
        // Faz o login com email e senha
        auth.signInWithEmailAndPassword(email, senha)
            .then(userCredentials => {
                const user = userCredentials?.user; // Verificação se o objeto user existe
                if (user) {
                    Swal.fire({
                        position: "center", 
                        icon: "success",
                        title: `Bem vindo ao Students Cool!`, 
                        showConfirmButton: false,
                        timer: 3000
                    })
                    .then(() => {
                        window.location.href = '/'
                    })
                } else {
                    alert('Erro: Nenhum usuário retornado.');
                }
            })
            .catch(error => {
                let errorMessage;

                switch (error.code) {
                    case 'auth/invalid-credential':
                        errorMessage = "Email ou senha incorretos"
                        break;
                    default:
                        errorMessage = `Erro: ${error}, contate um administrador ou tente novamente mais tarde.`
                        break;
                }

                Swal.fire({
                    icon: "error",
                    title: "Erro",
                    text: `${errorMessage}`,
                });
            });
    };

    return (
        <div className="background_Login">
            <div >
                <Link to={"/"}><img className="Logo" src={Logo} alt="logo" /></Link>
            </div>
            <div className="form">
                <form action="" className='Inputs' onSubmit={handleLogin}>
                    <h1>Login StudentsCool</h1>

                    <input type="email"
                        id="email"
                        placeholder='E-mail'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className='button_padrao' />
                    <input type="password"
                        id="Pass"
                        placeholder='Digite sua senha'
                        onChange={(e) => setSenha(e.target.value)}
                        value={senha}
                        className='button_padrao' />
                    <a href="https://www.youtube.com/watch?v=M3_XrtBGJJ0" className='esqueci_pass'>Esqueci a senha</a>
                    <button type="submit" className='Button_submit'>Entrar</button>
                    <Link to={"/contato"} className='Erro_login'>Erro em login? entre em contato</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;