package com.studentscool.StudentsCool.application.domain;

import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Escola {
    private Long id;
    private String nome;
    private String email;
    private String localizacao;
    private String contato_alt;
    private Integer qtd_alunos;
    private String dias_letivos;
    private String observacoes;
    private Boolean aprovado;
}
