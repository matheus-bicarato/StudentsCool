package com.studentscool.StudentsCool.application;

import com.studentscool.StudentsCool.application.domain.Escola;
import com.studentscool.StudentsCool.application.ports.in.EscolasUseCases;
import com.studentscool.StudentsCool.application.ports.out.EscolaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        return repository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Override
    public Escola updateEscola(Escola escolaDetails, Long id) {
        Escola escola = repository.findById(id).orElseThrow(() -> new RuntimeException("Não foi possível encontrar o livro desse id : " + id));

        escola.setNome(escolaDetails.getNome());
        escola.setEmail(escolaDetails.getEmail());
        escola.setLocalizacao(escolaDetails.getLocalizacao());
        escola.setContato_alt(escolaDetails.getContato_alt());
        escola.setLvl_ensino(escolaDetails.getLvl_ensino());
        escola.setQtd_turma(escolaDetails.getQtd_turma());
        escola.setPre_cores(escolaDetails.getPre_cores());
        escola.setDias_letivos(escolaDetails.getDias_letivos());
        escola.setHorarios(escolaDetails.getHorarios());
        escola.setMetodo_nota(escolaDetails.getMetodo_nota());
        escola.setObservacoes(escolaDetails.getObservacoes());
        escola.setAprovado(escolaDetails.getAprovado());

        return repository.save(escola);
    }

    @Override
    public void deleteEscola(Long id) {
        repository.deleteById(id);
    }
}
