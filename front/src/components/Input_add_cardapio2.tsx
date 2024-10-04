import React, { useState } from 'react';
import './styles/add_cardapio_input.css'; // Importando o CSS

const LancheForm2 = () => {
    const [opcoes, setOpcoes] = useState([{ nome: "" }, { nome: "" }, { nome: "" }]);
    const [mensagem, setMensagem] = useState("");

    // Adiciona uma nova opção
    const handleAddOpcao = () => {
        setOpcoes([...opcoes, { nome: "" }]);
    };

    // Remove uma opção pelo índice
    const handleRemoveOpcao = (indexToRemove) => {
        const novasOpcoes = opcoes.filter((_, index) => index !== indexToRemove);
        setOpcoes(novasOpcoes);
    };

    // Atualiza o valor da opção de input
    const handleInputChange = (index, event) => {
        const novasOpcoes = [...opcoes];
        novasOpcoes[index].nome = event.target.value;
        setOpcoes(novasOpcoes);
    };

    // Lida com o envio do formulário e validação
    const handleSubmit = (event) => {
        event.preventDefault();

        // Verifica se todos os campos estão preenchidos
        const preenchido = opcoes.every(opcao => opcao.nome.trim() !== "");

        if (preenchido) {
            console.log("Opções escolhidas:", opcoes);
            setMensagem("Opções enviadas com sucesso!");
        } else {
            setMensagem("Preencha todas as opções antes de enviar.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1 className="form-header">Café da Manha</h1>

            {/* Inputs organizados em linha */}
            <div className="inputs-container">
                {opcoes.map((opcao, index) => (
                    <div key={index} className="input-item">
                        <div className="inputs_container_itens">
                            <input
                                type="text"
                                placeholder={`Opção ${index + 1}`}
                                value={opcao.nome}
                                onChange={(event) => handleInputChange(index, event)}
                                className="form-input"
                            />
                            <input
                                type="text"
                                placeholder='unidade em grama'
                                value={opcao.nome}
                                onChange={(event) => handleInputChange(index, event)}
                                className="form_input_unidade"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => handleRemoveOpcao(index)}
                            className="delete-button">
                            tirar opção
                        </button>
                    </div>
                ))}
            </div>

            {/* Exibe a mensagem de sucesso ou erro */}
            {mensagem && <p className="mensagem">{mensagem}</p>}

            <div className="button-container">
                <button type="button" onClick={handleAddOpcao} className="add-button">
                    + Adicionar outra opção
                </button>
                <button type="submit" className="submit-button">Enviar</button>
            </div>
        </form>
    );
};

export default LancheForm2;
