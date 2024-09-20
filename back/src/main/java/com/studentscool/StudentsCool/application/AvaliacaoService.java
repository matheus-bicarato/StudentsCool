package com.studentscool.StudentsCool.application;

import com.studentscool.StudentsCool.application.domain.Avaliacao;
import com.studentscool.StudentsCool.application.ports.in.AvaliacoesUseCases;
import com.studentscool.StudentsCool.application.ports.out.AvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public void deleteAllAvaliacoes() {
        avaliacaoRepository.deleteAll();
    }
}
