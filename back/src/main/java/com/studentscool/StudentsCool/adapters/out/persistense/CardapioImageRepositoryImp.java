package com.studentscool.StudentsCool.adapters.out.persistense;

import com.studentscool.StudentsCool.application.domain.CardapioImage;
import com.studentscool.StudentsCool.application.ports.out.CardapioImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CardapioImageRepositoryImp implements CardapioImageRepository {

    @Autowired
    private CardapioImageJpaRepository cardapioImageJpaRepository;

    @Override
    public Optional<CardapioImage> findById(Long id) {
        return cardapioImageJpaRepository.findById(id).map(this::toDomain);
    }

    @Override
    public CardapioImage save(CardapioImage cardapioImage) {
        CardapioImageEntity cardapioImageEntity = toEntity(cardapioImage);
        return toDomain(cardapioImageJpaRepository.save(cardapioImageEntity));
    }

    @Override
    public void deleteById(Long id) {
        cardapioImageJpaRepository.deleteById(id);
    }

    private CardapioImage toDomain(CardapioImageEntity entity) {
        CardapioImage cardapioImage = new CardapioImage();
        cardapioImage.setId(entity.getId());
        cardapioImage.setImagem_cardapio(entity.getImagem_cardapio());

        return cardapioImage;
    }

    private CardapioImageEntity toEntity(CardapioImage cardapioImage) {
        CardapioImageEntity entity = new CardapioImageEntity();
        entity.setId(cardapioImage.getId());
        entity.setImagem_cardapio(cardapioImage.getImagem_cardapio());

        return entity;
    }
}
