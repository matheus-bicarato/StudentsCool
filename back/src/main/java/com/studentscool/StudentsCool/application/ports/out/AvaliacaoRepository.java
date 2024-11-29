package com.studentscool.StudentsCool.application.ports.out;

import com.studentscool.StudentsCool.application.domain.Avaliacao;
import com.studentscool.StudentsCool.application.domain.User;

import java.util.List;
import java.util.Optional;

public interface AvaliacaoRepository {
    List<Avaliacao> findAll();

    Avaliacao save(Avaliacao avaliacao);

    Optional<Avaliacao> findById(String id);

    void deleteAll();
}
