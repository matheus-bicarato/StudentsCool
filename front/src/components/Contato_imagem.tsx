import React, { useEffect, useState } from 'react';
import './styles/add_imagem.css'; // Importa o arquivo de estilo

interface ImageUploadProps {
    onImageSelect: (base64: string | null) => void;
    selectedImage: string | null; // Adiciona a prop selectedImage

}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect, selectedImage }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        if (selectedImage === null) {
            setPreviewUrl(null); // Limpa a pré-visualização se a imagem for removida
        }
    }, [selectedImage]);

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Pega o primeiro arquivo selecionado

        if (file) {
            const base64 = await convertToBase64(file);
            setPreviewUrl(URL.createObjectURL(file)); // Cria um URL temporário para exibir a imagem
            onImageSelect(base64); // Passa a string base64 para o componente pai
        } else {
            onImageSelect(null); // Se não houver arquivo, notifica o pai
        }
    };

    const convertToBase64 = (file: File) => {
        return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleRemoveImage = () => {
        setPreviewUrl(null);
        onImageSelect(null); // Notifica o pai que a imagem foi removida
    };

    return (
        <form className="image-upload-container">
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
        </form>
    );
};

export default ImageUpload;
