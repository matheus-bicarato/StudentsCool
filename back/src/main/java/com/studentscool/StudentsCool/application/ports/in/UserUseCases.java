package com.studentscool.StudentsCool.application.ports.in;

import com.studentscool.StudentsCool.application.domain.User;

import java.util.List;

public interface UserUseCases {
//    editar, deletar
    User PostUser(User user);

    List<User> getAllUsers();

    User getUserById(String id);

    User updateUser(User userDetails, String id);

    void deleteUser(String id);
}
