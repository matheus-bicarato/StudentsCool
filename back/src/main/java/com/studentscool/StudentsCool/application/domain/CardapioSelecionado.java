package com.studentscool.StudentsCool.application.domain;

import com.studentscool.StudentsCool.adapters.out.persistense.AddCardapioEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CardapioSelecionado {
    private Long id;

    private AddCardapioEntity addCardapio;

    private Integer porcoes_escolhidas;
}
