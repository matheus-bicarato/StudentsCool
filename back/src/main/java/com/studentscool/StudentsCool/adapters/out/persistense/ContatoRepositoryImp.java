package com.studentscool.StudentsCool.adapters.out.persistense;

import com.studentscool.StudentsCool.application.domain.Contato;
import com.studentscool.StudentsCool.application.ports.out.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class ContatoRepositoryImp implements ContatoRepository {

    @Autowired
    private ContatoJpaRepository contatoJpaRepository;

    @Override
    public List<Contato> findAll() {
        return contatoJpaRepository.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    @Override
    public Optional<Contato> findById(Long id) {
        return contatoJpaRepository.findById(id).map(this::toDomain);
    }

    @Override
    public Contato save(Contato contato) {
        ContatoEntity contatoEntity = toEntity(contato);
        return  toDomain(contatoJpaRepository.save(contatoEntity));
    }

    @Override
    public void deleteById(Long id) {
        contatoJpaRepository.deleteById(id);
    }

    private Contato toDomain(ContatoEntity entity) {
        Contato contato = new Contato();
        contato.setId(entity.getId());
        contato.setNome(entity.getNome());
        contato.setEmail(entity.getEmail());
        contato.setTelefone(entity.getTelefone());
        contato.setMensagem(entity.getMensagem());

        return contato;
    }

    private ContatoEntity toEntity(Contato contato) {
        ContatoEntity entity = new ContatoEntity();
        entity.setId(contato.getId());
        entity.setNome(contato.getNome());
        entity.setEmail(contato.getEmail());
        entity.setTelefone(contato.getTelefone());
        entity.setMensagem(contato.getMensagem());

        return entity;
    }

}
