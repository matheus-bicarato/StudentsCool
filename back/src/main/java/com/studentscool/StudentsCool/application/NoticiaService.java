package com.studentscool.StudentsCool.application;

import com.studentscool.StudentsCool.application.domain.Noticia_exemplo;
import com.studentscool.StudentsCool.application.ports.in.NoticiaUseCases;
import com.studentscool.StudentsCool.application.ports.out.NoticiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoticiaService implements NoticiaUseCases {

    @Autowired
    private  NoticiaRepository noticiaRepository;

    @Override
    public Noticia_exemplo PostNoticia(Noticia_exemplo noticia_exemplo) {;
        return noticiaRepository.save(noticia_exemplo);
    }

    @Override
    public List<Noticia_exemplo> getAllNoticias() {
        return List.of();
    }

    @Override
    public void DeletarNoticia(Long id) {

    }
}
