package com.studentscool.StudentsCool.application.ports.out;

import com.studentscool.StudentsCool.application.domain.Escola;

import java.util.List;
import java.util.Optional;

public interface EscolaRepository {
    List<Escola> findAll();
    Optional<Escola> findById(Long id);
    Escola save(Escola escola);
    void deleteById(Long id);
}
