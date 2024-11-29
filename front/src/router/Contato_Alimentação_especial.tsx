import { useState } from "react";
import Header_simplificado from "../components/Header_simplificado";
import Footer from "../components/Footer";
import Add_imagem from "../components/Contato_imagem"; // Componente de upload de imagem
import axios from 'axios';
import Swal from 'sweetalert2';
import './styles/ContatoAlimentEX.css';
import Food from '../assets/imagens/Food_Icon.png';
import ZAP from '../assets/imagens/Zap_Icon.png';
import EMAIL from '../assets/imagens/Email_Icon.png';
import INSTA from '../assets/imagens/Insta_Black_Icon.png';
import { Link } from "react-router-dom";

const ContatoAlimentEX: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');
    const [selectedImage, setSelectedImage] = useState<string | null>(null); // Armazena a imagem em base64

    const handleImageUpload = (base64: string | null) => {
        setSelectedImage(base64);
    };

    const ContatoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('telefone', telefone);
        formData.append('mensagem', mensagem);
        formData.append('DuvidaOuAlimentacao', String(true));

        if (selectedImage) {
            formData.append('imagemBase64', selectedImage);
        }

        axios.post('http://localhost:8080/contato', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(() => {
            setNome('');
            setEmail('');
            setTelefone('');
            setMensagem('');
            setSelectedImage(null);

            Swal.fire({
                title: 'Sucesso!',
                text: 'Mensagem enviada com sucesso!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        })
        .catch((error) => {
            if (error.response) {
                if (error.response.status === 500) {
                    Swal.fire({
                        title: 'Erro Interno!',
                        text: 'Ocorreu um erro no servidor. Tente novamente mais tarde.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                } else if (error.response.status === 400) {
                    Swal.fire({
                        title: 'Contato não permitido!',
                        text: 'Revise as informações necessárias.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                } else {
                    Swal.fire({
                        title: 'Erro!',
                        text: 'Não foi possível enviar a mensagem.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                }
            } else {
                Swal.fire({
                    title: 'Erro!',
                    text: 'Imagem pesada ou tente novamente mais tarde.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }

            console.error('Erro ao enviar a mensagem:', error);
        });
    };

    return (
        <div>
            <Header_simplificado />
            <main>
                <div className="Container_Pai_EX">
                    <div className="Infos_EX">
                        <div className="Title_EX">
                            <h1>Alimentação Especial</h1>
                            <img src={Food} alt="" />
                        </div>
                        <div className="contatos_EX">
                            <ul className="contatosUl_EX">
                                <li>
                                    <a href="#">
                                        <span><img src={ZAP} alt="ZAP" /></span>
                                        <h1>(11) 97044-1052</h1>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span><img src={EMAIL} alt="" /></span>
                                        <h1>studentscool@gmail.com</h1>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span><img src={INSTA} alt="" /></span>
                                        <h1>@studentscool</h1>
                                    </a>
                                </li>
                                <li>
                                <Link
                                    to="/Contato" 
                                    className='Button_submit_contato'
                                    style={{
                                        fontSize: "1.3rem",
                                        width: "40%",
                                        height: "50px" ,
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        margin: "auto",
                                        border: "2px solid black",
                                        color: "black"
                                    }}
                                    title='Clique aqui'
                                    >
                                        Contato simples?
                                </Link>
                            </li>
                            </ul>
                        </div>
                    </div>

                    <form className='Form_contato' onSubmit={ContatoSubmit}>
                        <div className='Inputs_form_contato_EX'>
                            <input
                                type="text"
                                placeholder='Nome Completo'
                                className='Nome_contato'
                                maxLength={300}
                                required
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                            <div className='Email_tel_contato'>
                                <input
                                    type="email"
                                    id='email'
                                    placeholder='E-mail'
                                    className='Email_contato'
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="tel"
                                    placeholder='Telefone'
                                    className='Tel_contato '
                                    maxLength={11}
                                    required
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                />
                            </div>
                            <textarea
                                placeholder='Mensagem...'
                                className='Mensagem_contato'
                                maxLength={300}
                                required
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                            />

                            <Add_imagem onImageSelect={handleImageUpload} selectedImage={selectedImage}/>
                        </div>
                        <button type="submit" className='Button_submit_contato'>Enviar</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContatoAlimentEX;
