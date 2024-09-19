package com.studentscool.StudentsCool.application;

import com.studentscool.StudentsCool.application.domain.AddCardapio;
import com.studentscool.StudentsCool.application.domain.CardapioSelecionado;
import com.studentscool.StudentsCool.application.ports.in.CardapioSelecionadoUseCases;
import com.studentscool.StudentsCool.application.ports.out.AddCardapioRepository;
import com.studentscool.StudentsCool.application.ports.out.CardapioSelecionadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CardapioSelecionadoService implements CardapioSelecionadoUseCases {

    @Autowired
    private CardapioSelecionadoRepository repository;

    @Autowired
    private AddCardapioRepository addCardapioRepository;

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
    public Map<String, Double> calcularQuantidadeTotal() {
        List<CardapioSelecionado> itensSelecionados = repository.findAll();
        List<AddCardapio> todosItens = addCardapioRepository.findAll();

//        armazena qtd total de comida por item
        Map<String, Double> qtdPorItem = new HashMap<>();

//        Inicia o mapa com todos os itens do cardapio
        for (AddCardapio item : todosItens) {
            qtdPorItem.put(item.getNome_comida(), 0.0);
        }

        for (CardapioSelecionado itemSelecionado : itensSelecionados) {
            String nomeItem = itemSelecionado.getAddCardapio().getNome_comida();
            double tamanhoPorcao = itemSelecionado.getAddCardapio().getTamanho_porcao();
            int qtdPorcao = itemSelecionado.getPorcoes_escolhidas();
            double quantidadeTotal = tamanhoPorcao * qtdPorcao;

            // Atualiza a quantidade total no mapa
            qtdPorItem.put(nomeItem, qtdPorItem.getOrDefault(nomeItem, 0.0) + quantidadeTotal);
        }

        return qtdPorItem;
    }

    @Override
    public void deleteAll() {

    }
}
