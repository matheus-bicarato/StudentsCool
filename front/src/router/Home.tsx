
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

const Home = () => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState(null)

    let userUid;

    useEffect(() => {
        if(user) {
            userUid = user.uid;

            axios.get(`http://localhost:8080/users/${userUid}`)
                .then(response => setUserInfo(response.data))
                .catch(error => console.log(`Erro ao puxar infos do usuário: ${error.message}`))
        }
    }, [user])

    useEffect(() => {
        if(user) {
            // alert("logado")]
        } else {
            window.location.href = '/login'
        }
    }, [user])
    
    const autoridade = userInfo.authority

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
                        <p>deu merda</p>
                    )}
                    
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;