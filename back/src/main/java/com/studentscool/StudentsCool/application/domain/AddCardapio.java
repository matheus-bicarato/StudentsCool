package com.studentscool.StudentsCool.application.domain;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddCardapio {
    private Long id;
    private String periodo;
    private String nome_comida;
    private Integer tamanho_porcao;
}
