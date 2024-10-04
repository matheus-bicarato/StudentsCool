import React, { useState } from 'react';
import './styles/add_imagem.css'; // Importa o arquivo de estilo
import axios from 'axios';
import Swal from 'sweetalert2';

const ImageUpload: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleImageChange = async (e) => {
        const file = e.target.files?.[0]; // Pega o primeiro arquivo selecionado

        const base64 = await convertToBase64(file);

        setSelectedImage(base64);

        if (file) {
            // Cria um URL temporário para exibir a imagem
            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
        }
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Impede o comportamento padrão do form

        if (selectedImage) {
            axios.post('http://localhost:8080/CardapioImage', {
                imagem_cardapio: selectedImage
            })
            .then(response => {
                if(response.status === 201) {
                    Swal.fire({
                        position: "center",
                        title: 'Sucesso!',
                        text: `A imagem foi enviada para o banco de dados com sucesso!`,
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    .then(() => {
                        setPreviewUrl(null)
                        setSelectedImage(null)
                    })
                }
            })
            .catch(error => {
                if(error.response.status  === 500) {
                    Swal.fire({
                        title: 'Erro!',
                        text: `Erro interno no servidor: ${error.message}`,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            })
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
