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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Impede o comportamento padrão do form

        if (selectedImage) {
            console.log('Imagem selecionada:', selectedImage);
            // Aqui você pode adicionar a lógica para enviar a imagem ao servidor ou banco de dados
        }
    };

    const handleRemoveImage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Impede comportamento padrão do botão
        setSelectedImage(null);
        setPreviewUrl(null);
    };

    return (
        <form className="image-upload-container" onSubmit={handleSubmit}>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id="fileInput"
            />
            <button
                type="button" // Muda o tipo do botão para evitar que submeta o form
                className="upload-button"
                onClick={() => document.getElementById('fileInput')?.click()}
            >
                Selecionar Imagem
            </button>

            {previewUrl && (
                <div className='container_preview'>
                    <img src={previewUrl} alt="Pré-visualização" className="image-preview" />
                    <button
                        type="button" // Define como botão comum para não submeter o form
                        className="remove-button button_padrao"
                        onClick={handleRemoveImage}
                    >
                        Remover Imagem
                    </button>
                </div>
            )}

            <button
                type="submit" // Define o botão de submissão do form
                className="upload-button"
                disabled={!selectedImage}
            >
                Fazer Upload
            </button>
        </form>
    );
};

export default ImageUpload;
