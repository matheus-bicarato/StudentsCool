package com.studentscool.StudentsCool.adapters.out.persistense;

import com.studentscool.StudentsCool.application.domain.CardapioSelecionado;
import com.studentscool.StudentsCool.application.ports.out.CardapioSelecionadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class CardapioSelecionadoRepositoryImp implements CardapioSelecionadoRepository {

    @Autowired
    private CardapioSelecionadoJpaRepository cardapioSelecionadoJpaRepository;

    @Override
    public CardapioSelecionado save(CardapioSelecionado cardapioSelecionado) {
        CardapioSelecionadoEntity cardapioSelecionadoEntity = toEntity(cardapioSelecionado);
        return toDomain(cardapioSelecionadoJpaRepository.save(cardapioSelecionadoEntity));
    }

    @Override
    public List<CardapioSelecionado> findAll() {
        return cardapioSelecionadoJpaRepository.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    @Override
    public Optional<CardapioSelecionado> buscarCardapioPorId(Long id) {
        return cardapioSelecionadoJpaRepository.findById(id).map(this::toDomain);
    }

    @Override
    public void deleteAll() {

    }

    private CardapioSelecionado toDomain(CardapioSelecionadoEntity entity) {
        CardapioSelecionado cardapioSelecionado = new CardapioSelecionado();
        cardapioSelecionado.setId(entity.getId());
        cardapioSelecionado.setId_user(entity.getId_user());
        cardapioSelecionado.setPorcoes_escolhidas(entity.getPorcoes_escolhidas());
        cardapioSelecionado.setAddCardapio(entity.getAddCardapio());
        return cardapioSelecionado;
    }

    private CardapioSelecionadoEntity toEntity (CardapioSelecionado cardapioSelecionado) {
        CardapioSelecionadoEntity entity = new CardapioSelecionadoEntity();
        entity.setId(cardapioSelecionado.getId());
        entity.setId_user(cardapioSelecionado.getId_user());
        entity.setPorcoes_escolhidas(cardapioSelecionado.getPorcoes_escolhidas());
        entity.setAddCardapio(cardapioSelecionado.getAddCardapio());
        return entity;
    }
}
