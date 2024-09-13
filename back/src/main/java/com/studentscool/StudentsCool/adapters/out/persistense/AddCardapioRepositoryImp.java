package com.studentscool.StudentsCool.adapters.out.persistense;

import com.studentscool.StudentsCool.application.domain.AddCardapio;
import com.studentscool.StudentsCool.application.ports.out.AddCardapioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class AddCardapioRepositoryImp implements AddCardapioRepository {

    @Autowired
    private AddCardapioRepository addCardapioRepository;

    @Override
    public List<AddCardapio> findAll() {
        return null;
    }

    @Override
    public Optional<AddCardapio> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public AddCardapio save(AddCardapio addCardapio) {
        return null;
    }

    @Override
    public void deleteById(Long id) {

    }

    private AddCardapio toDomain(AddCardapioEntity entity) {
        AddCardapio addCardapio = new AddCardapio();
        addCardapio.setId(entity.getId());
        addCardapio.setPeriodo(entity.getPeriodo());
        addCardapio.setNome_comida(entity.getNome_comida());
        addCardapio.setTamanho_porcao(entity.getTamanho_porcao());
        return addCardapio;
    }

    private AddCardapioEntity toEntity(AddCardapio addCardapio) {
        AddCardapioEntity entity = new AddCardapioEntity();
        entity.setId(addCardapio.getId());
        entity.setPeriodo(entity.getPeriodo());
        entity.setNome_comida(entity.getNome_comida());
        entity.setTamanho_porcao(entity.getTamanho_porcao());
        return entity;
    }
}
