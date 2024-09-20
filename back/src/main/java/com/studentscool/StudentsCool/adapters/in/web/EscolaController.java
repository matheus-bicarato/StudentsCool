package com.studentscool.StudentsCool.adapters.in.web;

import com.studentscool.StudentsCool.application.domain.Escola;
import com.studentscool.StudentsCool.application.ports.in.EscolasUseCases;
import org.hibernate.exception.ConstraintViolationException;
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
@RequestMapping("/escolas")
@CrossOrigin(origins = "*", maxAge = 3600)
public class EscolaController {

    @Autowired
    private EscolasUseCases escolasUseCases;

    @PostMapping()
    public ResponseEntity<?> criarEscola(@RequestBody Escola escola) {
        try {
            Escola resultado = escolasUseCases.PostEscola(escola);
            return ResponseEntity.status(HttpStatus.CREATED).body(escola);
        } catch (DataIntegrityViolationException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", "Erro: Email duplicado.");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResponse);
        }

    }

    @GetMapping
    public List<Escola> listar() {
        return escolasUseCases.getAllEscolas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEscolaById(@PathVariable(value = "id") Long id) {
        try {
            Escola escola = escolasUseCases.getEscolaById(id);
            return ResponseEntity.status(HttpStatus.OK).body(escola);
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

    @PutMapping("/{id}")
    public ResponseEntity<?> atualizarEscola(@PathVariable(value = "id") Long id,
                                                  @RequestBody Escola escolaDetails) {
        try {
            Escola updateEscola = escolasUseCases.updateEscola(escolaDetails, id);
            return ResponseEntity.ok(updateEscola);
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
    public ResponseEntity<Map<String, String>> deleteEscola(@PathVariable(value = "id") Long id) {
        try {
            List<Escola> todasEscolas = escolasUseCases.getAllEscolas();

            boolean idExiste = todasEscolas.stream().anyMatch(escola -> escola.getId().equals(id));

            if (!idExiste) {
                Map<String, String> errorRepsponse = new HashMap<>();
                errorRepsponse.put("Mensagem", "Erro: Escola com o ID " + id + " não foi encontrada");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorRepsponse);
            }

            escolasUseCases.deleteEscola(id);

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
