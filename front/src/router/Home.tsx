
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/Home.css'
import Gallery_alunos from '../components/Gallery_alunos';
import Gallery_cantina from '../components/Gallery_cantina';
// import Gallery_adm_geral from '../components/Gallery_adm_geral';
import Gallery_adm_escola from '../components/Gallery_adm_escola';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase_connect'
import { useEffect, useState } from 'react';
import Gallery_adm_geral from '../components/Gallery_adm_escola';

const Home = () => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({})
    const [autoridade, setAutoridade] = useState("")

    let userUid;

    useEffect(() => {
        if(user) {
            userUid = user.uid;

            axios.get(`http://localhost:8080/users/${userUid}`)
                .then(response => {
                    const autoridade = response.data.authority;

                    setAutoridade(autoridade);

                    setUserInfo(response.data)
                })
                .catch(error => console.log(`Erro ao puxar infos do usuário: ${error.message}`))
        }
    }, [user])

    return (
        <div className="">
            <Header />
            <main className="main_home">
                <div className="main_top">
                    {autoridade === "membro" ? (
                        <Gallery_alunos />  
                    ) : autoridade === "cantina" ? (
                        <Gallery_cantina />
                    ) : autoridade === "admin" ? (
                        <Gallery_adm_escola />
                    ) : (
                        <p>Erro interno no servidor.</p>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;