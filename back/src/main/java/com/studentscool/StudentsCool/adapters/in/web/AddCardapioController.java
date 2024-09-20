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
    public ResponseEntity<List<AddCardapio>> listar() {
        try {
            List<AddCardapio> addCardapioList = addCardapioUseCases.getAllCardapios();
            if (addCardapioList.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
            }
            return ResponseEntity.ok(addCardapioList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
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

    @DeleteMapping
    public ResponseEntity<String> deleteAllCardapio() {
        try {
            addCardapioUseCases.deleteAllItemCardapio();
            return ResponseEntity.ok("Todos os itens foram macacados");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Deletou n mano");
        }
    }
}
