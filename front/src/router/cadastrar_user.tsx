import Logo from '../assets/imagens/Logo_branco.png'
import { Link } from 'react-router-dom'
import './styles/cadastrar_user.css'
import DropdownSelect from '../components/dropdown';
import { useState, useEffect } from 'react';
import { auth } from '../../firebase_connect';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Cadastrar_user = () => {
    const [uidFire, setUidFire] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [authority, setAuthority] = useState('')
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const userUid = user.uid;

            axios.get(`http://localhost:8080/users/${userUid}`)
                .then(response => {
                    const autoridade = response.data.authority;

                    setAuthority(autoridade);

                    // Verifica se a autoridade é "admin"
                    if (autoridade !== 'adminEscola') {
                        navigate('/error-page'); // Redireciona para a página de erro
                    }
                })
                .catch(error => console.log(`Erro ao puxar infos do usuário: ${error.message}`));
        }
    }, [user, navigate]);
    
    const options = [
        { id: 1, value: 'membro', label: 'Aluno' },
        { id: 2, value: 'cantina', label: 'Cantina' },
        { id: 3, value: 'adminEscola', label: 'ADM' },
    ];

    const handleCadastro = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/users', { id: uidFire, nome: nome, email: email, cpf: cpf, telefone: telefone, authority: authority })
        .then(response => {
            if(response.status === 201) {
                Swal.fire({
                    title: 'Sucesso!',
                    text: `O usuário "${nome}" foi cadastrado com sucesso!`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });

                setUidFire('');
                setNome('');
                setEmail('');
                setCpf('');
                setTelefone('');
            } 
        })
        .catch(error => {
            if (error.response && error.response.status === 409) {
                Swal.fire({
                    title: 'Erro!',
                    text: `Já existe um usuário com esse email ou CPF cadastrado.`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            } else {
                Swal.fire({
                    title: 'Erro!',
                    text: `Erro interno no servidor.`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        });
    };

    return (
        <div className="background_Login">
            <div>
                <Link to={"/"}><img className="Logo" src={Logo} alt="logo" /></Link>
            </div>
            <div className="form">
                <form className='Inputs' onSubmit={handleCadastro}>
                    <h1>Cadastre o usuário</h1>

                    <div className='cadastro-firebase-div'>
                        <a href="https://console.firebase.google.com/u/0/project/studentscool-91f85/authentication/users?hl=pt" className='cadastro-firebase' target='_blank'>Cadastre o usuário primeiro no Firebase</a>
                    </div>

                    <input 
                        type="text" 
                        id="Uid" 
                        placeholder='Uid Firebase' 
                        onChange={(e) => setUidFire(e.target.value)} 
                        value={uidFire} 
                        className='button_padrao' 
                    />
                    <input 
                        type="text" 
                        id="Name" 
                        placeholder='Nome completo' 
                        onChange={(e) => setNome(e.target.value)} 
                        value={nome} 
                        className='button_padrao' 
                    />
                    <input 
                        type="email" 
                        id="email" 
                        placeholder='E-mail' 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        className='button_padrao' 
                    />
                    <input 
                        type="number" 
                        id="CPF" 
                        placeholder='CPF' 
                        onChange={(e) => setCpf(e.target.value)} 
                        value={cpf} 
                        className='button_padrao' 
                    />
                    <input 
                        type="number" 
                        id="Telefone" 
                        placeholder='Telefone' 
                        onChange={(e) => setTelefone(e.target.value)} 
                        value={telefone} 
                        className='button_padrao' 
                    />

                    <DropdownSelect 
                        title="Selecione a autoridade do usuário:" 
                        options={options} 
                        onChange={(value) => setAuthority(value)} 
                    />

                    <button type="submit" className='Button_submit'>Enviar</button>
                    <Link to={"/contato"} className='Erro_login'>Erro em cadastrar? Entre em contato</Link>
                </form>
            </div>
        </div>
    );
};

export default Cadastrar_user;
