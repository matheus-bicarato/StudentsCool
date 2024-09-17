package com.studentscool.StudentsCool.application;

import com.studentscool.StudentsCool.application.domain.CardapioSelecionado;
import com.studentscool.StudentsCool.application.ports.in.CardapioSelecionadoUseCases;
import com.studentscool.StudentsCool.application.ports.out.CardapioSelecionadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class CardapioSelecionadoService implements CardapioSelecionadoUseCases {

    @Autowired
    private CardapioSelecionadoRepository repository;

    @Override
    public CardapioSelecionado BuscarCardapioSelecionado(Long id) {
        return repository.buscarCardapioPorId(id)
                .orElseThrow(() -> new NoSuchElementException("Cardapio selecionado não encontrado. ID = " + id));
    }

    @Override
    public CardapioSelecionado AddItemSelecionado(CardapioSelecionado cardapioSelecionado) {
        return repository.save(cardapioSelecionado);
    }

    @Override
    public List<CardapioSelecionado> GetAllSelecionados() {
        return repository.findAll();
    }

    @Override
    public List<String> calcularQuantidadeTotal() {
        List<CardapioSelecionado> itensSelecionados = repository.findAll();
        List<String> resultados = new ArrayList<>();

        for (CardapioSelecionado itemSelecionado : itensSelecionados) {
            String nomeItem = itemSelecionado.getAddCardapio().getNome_comida();
            double tamanhoPorcao = itemSelecionado.getAddCardapio().getTamanho_porcao();
            int qtdPorcao = itemSelecionado.getPorcoes_escolhidas();
            double quantidadeTotal = tamanhoPorcao * qtdPorcao;

            // Formatar o resultado e adicionar à lista
            String resultado = String.format("Item: %s, Quantidade Total: %.2f", nomeItem, quantidadeTotal);
            resultados.add(resultado);
        }

        return resultados;
    }

    @Override
    public void deleteAll() {

    }
}
