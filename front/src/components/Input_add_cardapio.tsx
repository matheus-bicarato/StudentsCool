import React, { useState } from 'react';
import './styles/add_cardapio_input.css'; // Importando o CSS

const LancheForm = () => {
    const [opcoes, setOpcoes] = useState([{ nome: "" }, { nome: "" }, { nome: "" }]);
    const [mensagem, setMensagem] = useState("");

    // Adiciona uma nova opção
    const handleAddOpcao = () => {
        setOpcoes([...opcoes, { nome: "" }]);
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
            <h2 className="form-header">Escolha seu Lanche da Tarde</h2>

            {/* Inputs organizados em linha */}
            <div className="inputs-container">
                {opcoes.map((opcao, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Opção ${index + 1}`}
                        value={opcao.nome}
                        onChange={(event) => handleInputChange(index, event)}
                        className="form-input"
                    />
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

export default LancheForm;
