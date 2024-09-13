import { Link } from 'react-router-dom';
import './styles/Gallery.css'; // Importa o CSS da galeria
import img1 from '../assets/imagens/lousa.png';
import Title1 from '../assets/imagens/mais_cadastro.png';
import Title2 from '../assets/imagens/livro.png';
import Title3 from '../assets/imagens/pizza.png';

const galleryItems = [
    { id: 1, title: 'Cadastrar Alunos', imageUrl: img1, imgTitle: Title1, path: '/' },
    { id: 2, title: 'Contas cadastradas', imageUrl: img1, imgTitle: Title2, path: '/' },
    { id: 3, title: 'Inserir Cardápio', imageUrl: img1, imgTitle: Title3, path: '/' },
    // Adicione mais itens conforme necessário
];

const Gallery_adm_geral = () => {
    return (
        <div className="gallery">
            {galleryItems.map(item => (
                <Link
                    to={item.path}
                    key={item.id}
                    className="gallery-item"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                    <div className="title">
                        <h1>{item.title}</h1>
                        <img src={item.imgTitle} alt={`${item.title} title`} className="title-image" />
                    </div>
                    <div className="gallery-item-overlay">
                        <h3>{item.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Gallery_adm_geral;
