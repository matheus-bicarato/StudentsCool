package com.studentscool.StudentsCool.application.ports.in;

import com.studentscool.StudentsCool.application.domain.CardapioSelecionado;

import java.util.List;

public interface CardapioSelecionadoUseCases {
//    retornar total de comida

    CardapioSelecionado AddItemSelecionado(CardapioSelecionado cardapioSelecionado);

    List<CardapioSelecionado> GetAllSelecionados();

    void deleteAll();
}
