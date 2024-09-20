package com.studentscool.StudentsCool.adapters.in.web;

import com.studentscool.StudentsCool.application.domain.Avaliacao;
import com.studentscool.StudentsCool.application.ports.in.AvaliacoesUseCases;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
            }
            return ResponseEntity.ok(avaliacaoList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
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
