package com.studentscool.StudentsCool.application.ports.out;

import com.studentscool.StudentsCool.application.domain.AddCardapio;

import java.util.List;
import java.util.Optional;

public interface AddCardapioRepository {
    List<AddCardapio> findAll();
    Optional<AddCardapio> findById(Long id);
    AddCardapio save(AddCardapio addCardapio);
    void deleteAll();
}
