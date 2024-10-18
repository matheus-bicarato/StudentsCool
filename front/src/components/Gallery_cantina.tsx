import { Link } from 'react-router-dom';
import './styles/Gallery.css'; // Importa o CSS da galeria
import img1 from '../assets/imagens/lousa.png';
import Title1 from '../assets/imagens/hamburger.png';
import Title2 from '../assets/imagens/pera.png';
import Title3 from '../assets/imagens/professor.png';


const galleryItems = [
    { id: 1, title: 'Quantidade de Alimento', imageUrl: img1, imgTitle: Title1, path: '/quantidade_de_alimentos' },
    { id: 2, title: 'Alimentação Especiais', imageUrl: img1, imgTitle: Title2, path: '/Alimentacao_especiais' },
    { id: 3, title: 'Adicionar cardapio', imageUrl: img1, imgTitle: Title3, path: '/Adicionar_cardapio' },
    // Adicione mais itens conforme necessário
];

const Gallery_cantina = () => {
    return (
        <div className="gallery_cantina">
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

export default Gallery_cantina;
