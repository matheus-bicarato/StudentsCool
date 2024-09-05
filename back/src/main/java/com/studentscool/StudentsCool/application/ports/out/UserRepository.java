package com.studentscool.StudentsCool.application.ports.out;

import com.studentscool.StudentsCool.application.domain.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
    List<User> findAll();
    Optional<User> findById(Long id);
    User save(User user);
    void deleteById(Long id);
}
