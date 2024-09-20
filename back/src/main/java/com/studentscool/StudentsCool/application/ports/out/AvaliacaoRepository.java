package com.studentscool.StudentsCool.application.ports.out;

import com.studentscool.StudentsCool.application.domain.Avaliacao;

import java.util.List;

public interface AvaliacaoRepository {
    List<Avaliacao> findAll();

    Avaliacao save(Avaliacao avaliacao);

    void deleteAll();
}
