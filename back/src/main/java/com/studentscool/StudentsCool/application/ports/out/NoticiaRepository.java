package com.studentscool.StudentsCool.application.ports.out;

import com.studentscool.StudentsCool.application.domain.Noticia_exemplo;

import java.util.List;

public interface NoticiaRepository {
    List<Noticia_exemplo> findAll();

    Noticia_exemplo save(Noticia_exemplo noticia_exemplo);

    void DeleteById(Long id);
}
