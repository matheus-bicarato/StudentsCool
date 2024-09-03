package com.studentscool.StudentsCool.application.ports.in;

import com.studentscool.StudentsCool.application.domain.Escola;

import java.util.List;

public interface EscolasUseCases {
    Escola PostEscola(Escola escola);

    List<Escola> getAllEscolas();

    Escola getEscolaById(Long id);

    Escola updateEscola(Escola escolaDetails, Long id);

    void deleteEscola(Long id);
}
