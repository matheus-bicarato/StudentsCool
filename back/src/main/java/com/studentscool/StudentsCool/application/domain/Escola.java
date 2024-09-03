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
    private String lvl_ensino;
    private Integer qtd_turma;
    private String pre_cores;
    private String dias_letivos;
    private String horarios;
    private String metodo_nota;
    private String observacoes;
    private Boolean aprovado;
}
