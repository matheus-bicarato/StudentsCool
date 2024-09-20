package com.studentscool.StudentsCool.adapters.out.persistense;

import com.studentscool.StudentsCool.application.domain.User;
import com.studentscool.StudentsCool.application.ports.out.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class UserRepositoryImp implements UserRepository {
    @Autowired
    private UserJpaRepository userJpaRepository;

    @Override
    public List<User> findAll() {
        return userJpaRepository.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    @Override
    public Optional<User> findById(String id) {
        return userJpaRepository.findById(id).map(this::toDomain);
    }

    @Override
    public User save(User user) {
        UserEntity userEntity = toEntity(user);
        return toDomain(userJpaRepository.save(userEntity));
    }

    @Override
    public void deleteById(String id) {
        userJpaRepository.deleteById(id);
    }

    private User toDomain(UserEntity entity) {
        User user = new User();
        user.setId(entity.getId());
        user.setNome(entity.getNome());
        user.setEmail(entity.getEmail());
        user.setCpf(entity.getCpf());
        user.setTelefone(entity.getTelefone());
        user.setAuthority(entity.getAuthority());
        return user;
    }

    private UserEntity toEntity(User user) {
        UserEntity entity = new UserEntity();
        entity.setId(user.getId());
        entity.setNome(user.getNome());
        entity.setEmail(user.getEmail());
        entity.setCpf(user.getCpf());
        entity.setTelefone(user.getTelefone());
        entity.setAuthority(user.getAuthority());
        return entity;
    }
}
