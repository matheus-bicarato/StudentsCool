import React, { useState } from 'react';
import './styles/add_cardapio_input.css'; // Importando o CSS

const LancheForm2 = () => {
    const [opcoes, setOpcoes] = useState([{ nome: "", unidade: "" }, { nome: "", unidade: "" }, { nome: "", unidade: "" }]);
    const [mensagem, setMensagem] = useState("");

    // Adiciona uma nova opção
    const handleAddOpcao = () => {
        setOpcoes([...opcoes, { nome: "", unidade: "" }]);
    };

    // Remove uma opção pelo índice
    const handleRemoveOpcao = (indexToRemove) => {
        const novasOpcoes = opcoes.filter((_, index) => index !== indexToRemove);
        setOpcoes(novasOpcoes);
    };

    // Atualiza o valor dos campos de input
    const handleInputChange = (index, event, field) => {
        const novasOpcoes = [...opcoes];
        novasOpcoes[index][field] = event.target.value;
        setOpcoes(novasOpcoes);
    };

    // Lida com o envio do formulário e validação
    const handleSubmit = (event) => {
        event.preventDefault();

        // Verifica se todos os campos estão preenchidos
        const preenchido = opcoes.every(opcao => opcao.nome.trim() !== "" && opcao.unidade.trim() !== "");

        if (preenchido) {
            console.log("Opções escolhidas:", opcoes);
            setMensagem("Opções enviadas com sucesso!");
        } else {
            setMensagem("Preencha todas as opções antes de enviar.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1 className="form-header">Almoço</h1>

            {/* Inputs organizados em linha */}
            <div className="inputs-container">
                {opcoes.map((opcao, index) => (
                    <div key={index} className="input-item">
                        <div className="inputs_container_itens">
                            <input
                                type="text"
                                placeholder={`Opção ${index + 1}`}
                                value={opcao.nome}
                                onChange={(event) => handleInputChange(index, event, 'nome')}
                                className="form-input"
                            />
                            <input
                                type="text"
                                placeholder='Unidade em gramas'
                                value={opcao.unidade}
                                onChange={(event) => handleInputChange(index, event, 'unidade')}
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
