package com.studentscool.StudentsCool.application;

import com.studentscool.StudentsCool.application.domain.Contato;
import com.studentscool.StudentsCool.application.ports.in.ContatoUseCases;
import com.studentscool.StudentsCool.application.ports.out.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ContatoService implements ContatoUseCases {

    @Autowired
    private ContatoRepository contatoRepository;

    @Override
    public Contato PostContato(Contato contato) { return contatoRepository.save(contato); }

    @Override
    public List<Contato> getAllComentarios() {
        return contatoRepository.findAll();
    }

    @Override
    public Contato getComentarioById(Long id) {
        return contatoRepository.findById(id).orElseThrow(() ->
                new NoSuchElementException("Comentario com o ID" + id +  " não foi encontrado"));
    }

    @Override
    public void DeletarComentario(Long id) {
        contatoRepository.deleteById(id);
    }

    ;


}
