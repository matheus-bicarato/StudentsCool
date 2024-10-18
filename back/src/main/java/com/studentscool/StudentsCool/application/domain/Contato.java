package com.studentscool.StudentsCool.application.domain;


import lombok.*;
import org.springframework.web.multipart.MultipartFile;

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
    private Boolean DuvidaOuAlimentacao;
    private String arquivo;
}
