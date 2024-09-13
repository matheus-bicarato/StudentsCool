package com.studentscool.StudentsCool.application.domain;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private String id;
    private String nome;
    private String email;
    private Long cpf;
    private Integer telefone;
    private String authority;
}
