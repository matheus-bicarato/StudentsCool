package com.studentscool.StudentsCool.application.ports.in;

import com.studentscool.StudentsCool.application.domain.CardapioImage;

public interface CardapioImageUseCase {
    CardapioImage PostImageCardapio (CardapioImage cardapioImage);

    CardapioImage getImagemCardapioById(Long id);

    void DeletarImagemCardapio(Long id);
}
