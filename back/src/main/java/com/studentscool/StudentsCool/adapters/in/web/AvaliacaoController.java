package com.studentscool.StudentsCool.adapters.in.web;

import com.studentscool.StudentsCool.application.domain.Avaliacao;
import com.studentscool.StudentsCool.application.ports.in.AvaliacoesUseCases;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/avaliacoes")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AvaliacaoController {

    @Autowired
    private AvaliacoesUseCases avaliacoesUseCases;

    @PostMapping()
    public ResponseEntity<Avaliacao> criarAvaliacao(@RequestBody Avaliacao avaliacao) {
        try {
            Avaliacao novaAvaliacao = avaliacoesUseCases.PostAvaliacoes(avaliacao);
            return ResponseEntity.status(HttpStatus.CREATED).body(novaAvaliacao);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }


    @GetMapping
    public  ResponseEntity<List<Avaliacao>> listar() {
        try {
            List<Avaliacao> avaliacaoList = avaliacoesUseCases.GetAllAvaliacoes();
            if (avaliacaoList.isEmpty()) {
                return ResponseEntity.status(HttpStatus.OK).body(avaliacaoList);
            }
            return ResponseEntity.ok(avaliacaoList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getAvaliacaoById(@PathVariable(value = "id") String id) {
        try {
            Avaliacao avaliacao= avaliacoesUseCases.getAvaliacaoById(id);
            return ResponseEntity.status(HttpStatus.OK).body(avaliacao);
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

    @DeleteMapping
    public ResponseEntity<String> deleteAll(){
        try {
            avaliacoesUseCases.deleteAllAvaliacoes();
            return ResponseEntity.ok("Todas as avaliaçoes foram deletadas com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao tentar deletar as avaliações");
        }
    }
}
