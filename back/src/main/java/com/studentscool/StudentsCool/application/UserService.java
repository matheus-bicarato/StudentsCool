package com.studentscool.StudentsCool.application;

import com.studentscool.StudentsCool.application.domain.User;
import com.studentscool.StudentsCool.application.ports.in.UserUseCases;
import com.studentscool.StudentsCool.application.ports.out.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UserService implements UserUseCases {

    @Autowired
    private UserRepository repository;

    @Override
    public User PostUser(User user) {
        return repository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User getUserById(String id) {
        return repository.findById(id).orElseThrow(() ->
                new NoSuchElementException("Usuário com o id " + id + " não foi encontrado."));
    }

    @Override
    public User updateUser(User userDetails, String id) {
        User user = repository.findById(id).orElseThrow(() -> new NoSuchElementException("Usuário com o id " + id + " não foi encontrado."));

        user.setNome(userDetails.getNome());
        user.setEmail(userDetails.getEmail());
        user.setCpf(userDetails.getCpf());
        user.setTelefone(userDetails.getTelefone());
        user.setAuthority(userDetails.getAuthority());

        return repository.save(user);
    }

    @Override
    public void deleteUser(String id) {
        repository.deleteById(id);
    }
}
