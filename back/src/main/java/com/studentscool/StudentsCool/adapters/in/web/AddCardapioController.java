package com.studentscool.StudentsCool.adapters.in.web;

import com.studentscool.StudentsCool.application.domain.AddCardapio;
import com.studentscool.StudentsCool.application.ports.in.AddCardapioUseCases;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/cardapio")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AddCardapioController {

    @Autowired
    private AddCardapioUseCases addCardapioUseCases;

    @PostMapping()
    public ResponseEntity<?> criarCardapio(@RequestBody AddCardapio addCardapio) {
        try {
            AddCardapio resultado = addCardapioUseCases.PostCardapio(addCardapio);
            return ResponseEntity.status(HttpStatus.CREATED).body(addCardapio);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", "Erro interno no servidor.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping
    public List<AddCardapio> listar() {
        return addCardapioUseCases.getAllCardapios();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCardapioById(@PathVariable(value = "id") Long id) {
        try {
            AddCardapio addCardapio = addCardapioUseCases.getCardapioItem(id);
            return ResponseEntity.status(HttpStatus.OK).body(addCardapio);
        } catch (NoSuchElementException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", "Erro interno no servidor.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteCardapio(@PathVariable(value = "id") Long id) {
        try {
            List<AddCardapio> todosCardapios = addCardapioUseCases.getAllCardapios();

            boolean idExiste = todosCardapios.stream().anyMatch(addCardapio -> addCardapio.getId().equals(id));

            if (!idExiste) {
                Map<String, String> errorRepsponse = new HashMap<>();
                errorRepsponse.put("Mensagem", "Erro: Item do cardapio com o ID " + id + " não foi encontrada");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorRepsponse);
            }

            addCardapioUseCases.deleteItemCardapio(id);

            Map<String, String> response = new HashMap<>();
            response.put("message", "Item do cardapio com o ID: " + id + " foi deletada com sucesso");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", "Erro interno no servidor: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
}
