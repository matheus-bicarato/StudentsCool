package com.studentscool.StudentsCool.application;

import com.studentscool.StudentsCool.application.domain.CardapioImage;
import com.studentscool.StudentsCool.application.ports.in.CardapioImageUseCase;
import com.studentscool.StudentsCool.application.ports.out.CardapioImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class CardapioImageService implements CardapioImageUseCase {

    @Autowired
    private CardapioImageRepository cardapioImageRepository;

    @Override
    public CardapioImage PostImageCardapio(CardapioImage cardapioImage) {
        return cardapioImageRepository.save(cardapioImage);
    }

    @Override
    public CardapioImage getImagemCardapioById(Long id) {
        return cardapioImageRepository.findById(id).orElseThrow(() ->
                new NoSuchElementException("Imagem com o id " + id + " não foi encontrado."));
    }

    @Override
    public void DeletarImagemCardapio(Long id) {
        cardapioImageRepository.deleteById(id);
    }
}
