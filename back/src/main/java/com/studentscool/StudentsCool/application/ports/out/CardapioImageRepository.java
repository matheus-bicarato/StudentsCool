package com.studentscool.StudentsCool.application.ports.out;

import com.studentscool.StudentsCool.application.domain.CardapioImage;

import java.util.Optional;

public interface CardapioImageRepository {
    Optional<CardapioImage> findById(Long id);

    CardapioImage save(CardapioImage cardapioImage);

    void deleteById(Long id);
}
