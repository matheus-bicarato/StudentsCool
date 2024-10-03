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
    public Map<String, Map<String, Double>> calcularQuantidadeTotal() {
        List<CardapioSelecionado> itensSelecionados = repository.findAll();
        List<AddCardapio> todosItens = addCardapioRepository.findAll();

        // Armazena qtd total de comida por período e por item
        Map<String, Map<String, Double>> qtdPorPeriodoEItem = new HashMap<>();

        // Inicia o mapa com todos os itens do cardápio
        for (AddCardapio item : todosItens) {
            qtdPorPeriodoEItem.put(item.getPeriodo(), new HashMap<>());
        }

        for (CardapioSelecionado itemSelecionado : itensSelecionados) {
            String nomeItem = itemSelecionado.getAddCardapio().getNome_comida();
            String periodo = itemSelecionado.getAddCardapio().getPeriodo();
            double tamanhoPorcao = itemSelecionado.getAddCardapio().getTamanho_porcao();
            int qtdPorcao = itemSelecionado.getPorcoes_escolhidas();
            double quantidadeTotal = tamanhoPorcao * qtdPorcao;

            // Verifica se já existe uma entrada para o período no mapa
            if (!qtdPorPeriodoEItem.containsKey(periodo)) {
                qtdPorPeriodoEItem.put(periodo, new HashMap<>());
            }

            // Atualiza a quantidade total no mapa com base no nome do item
            Map<String, Double> qtdPorItem = qtdPorPeriodoEItem.get(periodo);
            qtdPorItem.put(nomeItem, qtdPorItem.getOrDefault(nomeItem, 0.0) + quantidadeTotal);
        }

        return qtdPorPeriodoEItem;
    }


    @Override
    public void deleteAllCardapios() {
            repository.deleteAll();
    }
}
