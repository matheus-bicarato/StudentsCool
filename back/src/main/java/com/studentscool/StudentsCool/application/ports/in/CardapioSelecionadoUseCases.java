package com.studentscool.StudentsCool.application.ports.in;

import com.studentscool.StudentsCool.application.domain.CardapioSelecionado;

import java.util.List;
import java.util.Map;

public interface CardapioSelecionadoUseCases {
    CardapioSelecionado BuscarCardapioSelecionado(Long id);

    CardapioSelecionado AddItemSelecionado(CardapioSelecionado cardapioSelecionado);

    List<CardapioSelecionado> GetAllSelecionados();

    Map<String, Map<String, Double>> calcularQuantidadeTotal();

    void deleteAllCardapios();
}