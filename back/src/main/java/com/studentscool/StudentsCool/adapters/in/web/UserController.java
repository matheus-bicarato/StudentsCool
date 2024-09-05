package com.studentscool.StudentsCool.adapters.in.web;

import com.studentscool.StudentsCool.application.domain.Escola;
import com.studentscool.StudentsCool.application.domain.User;
import com.studentscool.StudentsCool.application.ports.in.UserUseCases;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {

    @Autowired
    private UserUseCases userUseCases;

    @PostMapping()
    public ResponseEntity<?> criarUsuario(@RequestBody User user) {
        try {
            User resultado = userUseCases.PostUser(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(user);
        } catch (DataIntegrityViolationException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", "Erro: Email, CPF ou telefone duplicado.");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResponse);
        }
    }

    @GetMapping
    public List<User> listar() {
        return userUseCases.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable(value = "id") Long id) {
        try {
            User user = userUseCases.getUserById(id);
            return ResponseEntity.status(HttpStatus.OK).body(user);
        } catch (NoSuchElementException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> atualizarUsuario(@PathVariable(value = "id") Long id,
                                              @RequestBody User userDetails) {
        try {
            User updateUser = userUseCases.updateUser(userDetails, id);
            return ResponseEntity.ok(updateUser);
        } catch (NoSuchElementException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        } catch (DataIntegrityViolationException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", "Erro: Email duplicado.");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResponse);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", "Erro interno no servidor.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteUser(@PathVariable(value = "id") Long id) {
        try {
            List<User> todosUsers = userUseCases.getAllUsers();

            boolean idExiste = todosUsers.stream().anyMatch(user -> user.getId().equals(id));

            if (!idExiste) {
                Map<String, String> errorRepsponse = new HashMap<>();
                errorRepsponse.put("Mensagem", "Erro: Escola com o ID " + id + " não foi encontrada");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorRepsponse);
            }

            userUseCases.deleteUser(id);

            Map<String, String> response = new HashMap<>();
            response.put("message", "Escola com o ID: " + id + " foi deletada com sucesso");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", "Erro interno no servidor: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
}
