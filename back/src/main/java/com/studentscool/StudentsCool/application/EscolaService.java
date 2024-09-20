package com.studentscool.StudentsCool.application;

import com.studentscool.StudentsCool.application.domain.Escola;
import com.studentscool.StudentsCool.application.ports.in.EscolasUseCases;
import com.studentscool.StudentsCool.application.ports.out.EscolaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class EscolaService implements EscolasUseCases {

    @Autowired
    private EscolaRepository repository;

    @Override
    public Escola PostEscola(Escola escola) {
        return repository.save(escola);
    }

    @Override
    public List<Escola> getAllEscolas() {
        return repository.findAll();
    }

    @Override
    public Escola getEscolaById(Long id) {
        return repository.findById(id).orElseThrow(() ->
                new NoSuchElementException("Escola com o ID " + id + " não foi encontrada"));
    }

    @Override
    public Escola updateEscola(Escola escolaDetails, Long id) {
        Escola escola = repository.findById(id).orElseThrow(() -> new NoSuchElementException("Escola com o ID " + id + " não foi encontrada"));

        escola.setNome(escolaDetails.getNome());
        escola.setEmail(escolaDetails.getEmail());
        escola.setLocalizacao(escolaDetails.getLocalizacao());
        escola.setContato_alt(escolaDetails.getContato_alt());
        escola.setQtd_alunos(escolaDetails.getQtd_alunos());
        escola.setDias_letivos(escolaDetails.getDias_letivos());
        escola.setObservacoes(escolaDetails.getObservacoes());
        escola.setAprovado(escolaDetails.getAprovado());

        return repository.save(escola);
    }

    @Override
    public void deleteEscola(Long id) {
        repository.deleteById(id);
    }
}
