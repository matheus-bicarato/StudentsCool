package com.studentscool.StudentsCool.adapters.out.persistense;

import com.studentscool.StudentsCool.application.domain.Avaliacao;
import com.studentscool.StudentsCool.application.ports.out.AvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class AvaliacaoRepositoryImp implements AvaliacaoRepository {

    @Autowired
    private AvaliacaoJpaRepository avaliacaoJpaRepository;

    @Override
    public List<Avaliacao> findAll() {
        return avaliacaoJpaRepository.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    @Override
    public Avaliacao save(Avaliacao avaliacao) {
        AvaliacaoEntity avaliacaoEntity = toEntity(avaliacao);
        return toDomain(avaliacaoJpaRepository.save(avaliacaoEntity));
    }

    @Override
    public void deleteAll() {
        avaliacaoJpaRepository.deleteAll();
    }

    private Avaliacao toDomain(AvaliacaoEntity entity) {
        Avaliacao avaliacao = new Avaliacao();
        avaliacao.setId(entity.getId());
        avaliacao.setAlimentoId(entity.getAlimentoId());
        avaliacao.setEstrela(entity.getEstrela());
        avaliacao.setPeriodo(entity.getPeriodo());
        avaliacao.setDiaSemana(entity.getDiaSemana());
        avaliacao.setDataAvaliacao(entity.getDataAvaliacao());

        return avaliacao;
    }

    private AvaliacaoEntity toEntity(Avaliacao avaliacao) {
        AvaliacaoEntity entity = new AvaliacaoEntity();
        entity.setId(avaliacao.getId());
        entity.setAlimentoId(avaliacao.getAlimentoId());
        entity.setEstrela(avaliacao.getEstrela());
        entity.setPeriodo(avaliacao.getPeriodo());
        entity.setDiaSemana(avaliacao.getDiaSemana());
        entity.setDataAvaliacao(avaliacao.getDataAvaliacao());

        return entity;
    }
}
