package com.studentscool.StudentsCool.application.ports.in;

import com.studentscool.StudentsCool.application.domain.CardapioSelecionado;

import java.util.List;

public interface CardapioSelecionadoUseCases {
    CardapioSelecionado BuscarCardapioSelecionado(Long id);

    CardapioSelecionado AddItemSelecionado(CardapioSelecionado cardapioSelecionado);

    List<CardapioSelecionado> GetAllSelecionados();

    double calcularQuantidadeTotal();

    void deleteAll();
}
