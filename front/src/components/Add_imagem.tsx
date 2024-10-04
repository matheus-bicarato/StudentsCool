// ImageUpload.tsx
import React, { useState } from 'react';
import './styles/add_imagem.css'; // Importa o arquivo de estilo

const ImageUpload: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Pega o primeiro arquivo selecionado

        if (file) {
            setSelectedImage(file);

            // Cria um URL temporário para exibir a imagem
            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
        }
    };

    const handleUploadClick = () => {
        // Função para lidar com o upload, se necessário
        if (selectedImage) {
            console.log('Imagem selecionada:', selectedImage);
            // Aqui você pode adicionar a lógica para enviar a imagem ao servidor ou banco de dados
        }
    };

    const handleRemoveImage = () => {
        // Função para remover a imagem selecionada
        setSelectedImage(null);
        setPreviewUrl(null);
    };

    return (
        <div className="image-upload-container">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id="fileInput"
            />
            <button
                className="upload-button"
                onClick={() => document.getElementById('fileInput')?.click()}
            >
                Selecionar Imagem
            </button>

            {previewUrl && (
                <div className='container_preview'>
                    <img src={previewUrl} alt="Pré-visualização" className="image-preview" />
                    <button className="remove-button button_padrao" onClick={handleRemoveImage}>
                        Remover Imagem
                    </button>
                </div>
            )}

            <button
                className="upload-button"
                onClick={handleUploadClick}
                disabled={!selectedImage}
            >
                Fazer Upload
            </button>
        </div>
    );
};

export default ImageUpload;
