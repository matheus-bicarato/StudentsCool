package com.studentscool.StudentsCool.application.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Noticia_exemplo {
    private Long id;
    private String ImagemNoticia;
    private boolean Populares;
    private boolean Novidades;
    private Date Data;
}
