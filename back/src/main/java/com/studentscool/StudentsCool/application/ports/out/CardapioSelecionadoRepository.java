package com.studentscool.StudentsCool.application.ports.out;

import com.studentscool.StudentsCool.application.domain.CardapioSelecionado;

import java.util.List;
import java.util.Optional;

public interface CardapioSelecionadoRepository {
    CardapioSelecionado save(CardapioSelecionado cardapioSelecionado);

    List<CardapioSelecionado> findAll();

    Optional<CardapioSelecionado> buscarCardapioPorId(Long id);

    void deleteAll();
}
