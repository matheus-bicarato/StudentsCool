package com.studentscool.StudentsCool.application.ports.in;

import com.studentscool.StudentsCool.application.domain.Contato;

import java.util.List;

public interface ContatoUseCases {
    Contato PostContato (Contato contato);

    List<Contato> getAllComentarios();

    Contato getComentarioById(Long id);

    void DeletarComentario(Long id);
}
