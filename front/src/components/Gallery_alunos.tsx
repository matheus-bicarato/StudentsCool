import { Link } from 'react-router-dom';
import './styles/Gallery.css'; // Importa o CSS da galeria
import img1 from '../assets/imagens/lousa.png';
import Title1 from '../assets/imagens/pizza.png';
import Title2 from '../assets/imagens/mao.png';
import Title3 from '../assets/imagens/professor.png';

const galleryItems = [
    { id: 1, title: 'Cardápio', imageUrl: img1, imgTitle: Title1, path: '/cardapio' },
    { id: 2, title: 'Avaliação', imageUrl: img1, imgTitle: Title2, path: '/' },
    { id: 3, title: 'Contato', imageUrl: img1, imgTitle: Title3, path: '/' },
    // Adicione mais itens conforme necessário
];

const Gallery_alunos = () => {
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

export default Gallery_alunos;
