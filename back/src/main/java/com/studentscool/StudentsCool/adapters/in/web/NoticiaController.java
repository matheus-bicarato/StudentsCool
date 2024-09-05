package com.studentscool.StudentsCool.adapters.in.web;

import com.studentscool.StudentsCool.application.domain.Noticia_exemplo;
import com.studentscool.StudentsCool.application.ports.in.NoticiaUseCases;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/noticias")
@CrossOrigin(origins = "*", maxAge = 3600)
public class NoticiaController {

    @Autowired
    private NoticiaUseCases noticiaUseCases;

    @PostMapping()
    public ResponseEntity<Noticia_exemplo> criarNoticia(@RequestBody Noticia_exemplo noticia_exemplo) {
        Noticia_exemplo resultado = noticiaUseCases.PostNoticia(noticia_exemplo);
        return ResponseEntity.ok(resultado);
    }

    @GetMapping()
    public ResponseEntity<?> listar() {
        List<Noticia_exemplo> noticia_exemplos = noticiaUseCases.getAllNoticias();

        return ResponseEntity.ok(noticia_exemplos);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteNoticia(@PathVariable(value = "id") Long id) {
        try {
            List<Noticia_exemplo> noticia_exemplos = noticiaUseCases.getAllNoticias();

            boolean idExiste = noticia_exemplos.stream().anyMatch(noticia_exemplo -> noticia_exemplo.getId().equals(id));

            if (!idExiste) {
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("message", "Noticia com ID " + id + " não foi encontrado");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
            }

            noticiaUseCases.DeletarNoticia(id);

            Map<String, String> response = new HashMap<>();
            response.put("message", "Noticia com ID " + id + " foi deletado com sucesso");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Erro interno do servidor: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
}

