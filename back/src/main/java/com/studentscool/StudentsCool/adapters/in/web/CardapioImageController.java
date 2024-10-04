package com.studentscool.StudentsCool.adapters.in.web;

import com.studentscool.StudentsCool.application.domain.CardapioImage;
import com.studentscool.StudentsCool.application.ports.in.CardapioImageUseCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/CardapioImage")
@CrossOrigin(origins = "*", maxAge = 3600)
public class CardapioImageController {

    @Autowired
    private CardapioImageUseCase cardapioImageUseCase;

    public boolean isInvalidField(String field) {
        return field == null || field.trim().isEmpty() || field.equals("null");
    }

    @PostMapping
    public ResponseEntity<?> salvarImagemDoCardapio(@RequestBody CardapioImage cardapioImage) {
        try {
            CardapioImage resultado = cardapioImageUseCase.PostImageCardapio(cardapioImage);
            return ResponseEntity.status(HttpStatus.CREATED).body("Imagem criada com sucesso!");
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", "Erro interno no servidor: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> selecionarImagemPeloId(@PathVariable(value = "id") Long id) {
        try {
            CardapioImage cardapioImage = cardapioImageUseCase.getImagemCardapioById(id);
            return ResponseEntity.status(HttpStatus.OK).body(cardapioImage);
        } catch (NoSuchElementException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", "Erro interno no servidor: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteImage(@PathVariable(value = "id") Long id) {
        cardapioImageUseCase.DeletarImagemCardapio(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
