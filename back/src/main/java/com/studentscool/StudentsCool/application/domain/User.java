package com.studentscool.StudentsCool.application.domain;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Long id;
    private String nome;
    private String email;
    private Long cpf;
    private Integer telefone;
    private String senha;
    private String authority;
    private String turma_id;
}
