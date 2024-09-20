import Logo from '../assets/imagens/Logo_branco.png'
import { Link } from 'react-router-dom'
import './styles/Login.css'
import '../../firebase_connect'
import { auth } from '../../firebase_connect'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [user] = useAuthState(auth);
    
    let userEmail, userUid;

    if(user) {
        userEmail = user.email;
        userUid = user.uid;
    }

    const handleLogin = (e) => {
        e.preventDefault(); // Previne o reload da página
        
        // Faz o login com email e senha
        auth.signInWithEmailAndPassword(email, senha)
            .then(userCredentials => {
                const user = userCredentials?.user; // Verificação se o objeto user existe
                if (user) {

                    alert(`Login realizado com sucesso! Email: ${user.email}`);
                } else {
                    alert('Erro: Nenhum usuário retornado.');
                }
            })
            .catch(error => {
                alert(`Erro ao fazer login: ${error.code}`);
            });
    };

    const handleLogout = () => {
        auth.signOut().then().catch((error) => {
            alert(error)
        })
    }

    return (
        <div className="background_Login">
            <div >
                <Link to={"/"}><img className="Logo" src={Logo} alt="logo" /></Link>
            </div>
            <div className="form">
                <form action="" className='Inputs' onSubmit={handleLogin}>
                    <h1>Login StudentsCool</h1>

                    <p>Informações do usuário: <br />
                    Email:  {userEmail}<br />
                    Uid:  {userUid}<br />
                    </p>

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
                    <button className='Button_submit' onClick={() => handleLogout()}>sair</button>
                    <Link to={"/contato"} className='Erro_login'>Erro em login? entre em contato</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;