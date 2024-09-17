package com.studentscool.StudentsCool.application;

import com.studentscool.StudentsCool.application.domain.CardapioSelecionado;
import com.studentscool.StudentsCool.application.ports.in.CardapioSelecionadoUseCases;
import com.studentscool.StudentsCool.application.ports.out.CardapioSelecionadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public double calcularQuantidadeTotal() {
        List<CardapioSelecionado> itensSelecionados = repository.findAll();
        double quantidadeTotal = 0;

        for (CardapioSelecionado itemSelecionado : itensSelecionados) {
            double tamanhoPorcao = itemSelecionado.getAddCardapio().getTamanho_porcao();
            int qtdPorcao = itemSelecionado.getPorcoes_escolhidas();
            quantidadeTotal += tamanhoPorcao * qtdPorcao;
        }

        return quantidadeTotal;
    }

    @Override
    public void deleteAll() {

    }
}
