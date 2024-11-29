package com.studentscool.StudentsCool.application;

import com.studentscool.StudentsCool.application.domain.Avaliacao;
import com.studentscool.StudentsCool.application.domain.User;
import com.studentscool.StudentsCool.application.ports.in.AvaliacoesUseCases;
import com.studentscool.StudentsCool.application.ports.out.AvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class AvaliacaoService implements AvaliacoesUseCases {

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    @Override
    public Avaliacao PostAvaliacoes(Avaliacao avaliacao) {
        return avaliacaoRepository.save(avaliacao);
    }

    @Override
    public List<Avaliacao> GetAllAvaliacoes() {
        return avaliacaoRepository.findAll();
    }

    @Override
    public Avaliacao getAvaliacaoById(String id) {
        return avaliacaoRepository.findById(id).orElseThrow(() ->
                new NoSuchElementException("Usuário com o id " + id + " não foi encontrado."));
    }

    @Override
    public void deleteAllAvaliacoes() {
        avaliacaoRepository.deleteAll();
    }
}
