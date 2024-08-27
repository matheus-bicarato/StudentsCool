import React from 'react';
import './styles/Gallery.css'; // Importa o CSS da galeria
import img1 from '../assets/imagens/lousa.png'

const galleryItems = [
    { id: 1, title: 'Cardápio', imageUrl: img1 },
    { id: 2, title: 'Chamadas', imageUrl: img1 },
    { id: 3, title: 'Boletim', imageUrl: img1 },
    { id: 4, title: 'Notícias', imageUrl: img1 },
    { id: 5, title: 'Aluno', imageUrl: img1 },
    { id: 6, title: 'Professor', imageUrl: img1 },
    // Adicione mais itens conforme necessário
];

const Gallery = () => {
    return (
        <div className="gallery">
            {galleryItems.map(item => (
                <div
                    key={item.id}
                    className="gallery-item"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                    <div className="title">
                        <h1>{item.title}</h1>
                    </div>
                    <div className="gallery-item-overlay">
                        <h3>{item.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;