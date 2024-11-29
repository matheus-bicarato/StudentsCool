package com.studentscool.StudentsCool.application.ports.in;

import com.studentscool.StudentsCool.application.domain.Avaliacao;
import com.studentscool.StudentsCool.application.domain.User;

import java.util.List;

public interface AvaliacoesUseCases {
    Avaliacao PostAvaliacoes(Avaliacao avaliacao);

    List<Avaliacao> GetAllAvaliacoes();

    Avaliacao getAvaliacaoById(String id);

    void deleteAllAvaliacoes();
}
