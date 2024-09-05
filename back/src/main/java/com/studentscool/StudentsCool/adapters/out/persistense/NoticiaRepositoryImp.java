package com.studentscool.StudentsCool.adapters.out.persistense;

import com.studentscool.StudentsCool.application.domain.Noticia_exemplo;
import com.studentscool.StudentsCool.application.ports.out.NoticiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class NoticiaRepositoryImp implements NoticiaRepository {

    @Autowired
    private NoticiaJpaRepository noticiaJpaRepository;

    @Override
    public List<Noticia_exemplo> findAll() {
        return noticiaJpaRepository.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    @Override
    public Noticia_exemplo save(Noticia_exemplo noticia_exemplo) {
        NoticiaEntity noticiaEntity = toEntity(noticia_exemplo);
        return toDomain(noticiaJpaRepository.save(noticiaEntity));
    }

    @Override
    public void DeleteById(Long id) {
        noticiaJpaRepository.deleteById(id);
    }


    private Noticia_exemplo toDomain(NoticiaEntity entity) {
        Noticia_exemplo noticia_exemplo = new Noticia_exemplo();
        noticia_exemplo.setId(entity.getId());
        noticia_exemplo.setImagemNoticia(entity.getImagemNoticia());
        noticia_exemplo.setPopulares(entity.isPopulares());
        noticia_exemplo.setNovidades(entity.isNovidades());
        noticia_exemplo.setData(entity.getData());

        return noticia_exemplo;
    }

    private NoticiaEntity toEntity(Noticia_exemplo noticia_exemplo) {
        NoticiaEntity entity = new NoticiaEntity();
        entity.setId(noticia_exemplo.getId());
        entity.setImagemNoticia(noticia_exemplo.getImagemNoticia());
        entity.setPopulares(noticia_exemplo.isPopulares());
        entity.setNovidades(noticia_exemplo.isNovidades());
        entity.setData(noticia_exemplo.getData());

        return entity;
    }
}
