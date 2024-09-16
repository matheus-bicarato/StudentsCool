package com.studentscool.StudentsCool.application;

import com.studentscool.StudentsCool.application.domain.AddCardapio;
import com.studentscool.StudentsCool.application.ports.in.AddCardapioUseCases;
import com.studentscool.StudentsCool.application.ports.out.AddCardapioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class AddCardapioService implements AddCardapioUseCases {

    @Autowired
    private AddCardapioRepository repository;

    @Override
    public AddCardapio PostCardapio(AddCardapio addCardapio) {
        return repository.save(addCardapio);
    }

    @Override
    public List<AddCardapio> getAllCardapios() {
        return repository.findAll();
    }

    @Override
    public AddCardapio getCardapioItem(Long id) {
        return repository.findById(id).orElseThrow(() ->
                new NoSuchElementException("Item do cardapio com o ID " + id + " não foi encontrado."));
    }

    @Override
    public void deleteItemCardapio(Long id) {
        repository.deleteById(id);
    }
}
