package com.studentscool.StudentsCool.application.ports.in;

import com.studentscool.StudentsCool.application.domain.Noticia_exemplo;

import java.util.List;

public interface NoticiaUseCases {

    Noticia_exemplo PostNoticia (Noticia_exemplo noticia_exemplo);

    List<Noticia_exemplo> getAllNoticias();

    void DeletarNoticia(Long id);
}
