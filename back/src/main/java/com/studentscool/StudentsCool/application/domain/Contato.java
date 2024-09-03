package com.studentscool.StudentsCool.application.domain;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Contato {
    private Long id;
    private String nome;
    private String email;
    private String telefone;
    private String mensagem;
}
