package com.studentscool.StudentsCool.application.ports.out;

import com.studentscool.StudentsCool.application.domain.Contato;

import java.util.List;
import java.util.Optional;

public interface ContatoRepository {
    List<Contato> findAll();
    Optional<Contato> findById(Long id);
    Contato save(Contato contato);

    void deleteById(Long id);
}
