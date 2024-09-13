package com.studentscool.StudentsCool.application.ports.in;

import com.studentscool.StudentsCool.application.domain.AddCardapio;

import java.util.List;

public interface AddCardapioUseCases {
    AddCardapio PostCardapio(AddCardapio addCardapio);

    List<AddCardapio> getAllCardapios();

    AddCardapio getCardapioItem(Long id);

    void deleteItemCardapio(Long id);
}
