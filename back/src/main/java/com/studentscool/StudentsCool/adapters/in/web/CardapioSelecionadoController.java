package com.studentscool.StudentsCool.adapters.in.web;


import com.studentscool.StudentsCool.application.domain.CardapioSelecionado;
import com.studentscool.StudentsCool.application.ports.in.CardapioSelecionadoUseCases;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/cardapioSelecionado")
@CrossOrigin(origins = "*", maxAge = 3600)
public class CardapioSelecionadoController {

    @Autowired
    private CardapioSelecionadoUseCases cardapioSelecionadoUseCases;

    @GetMapping
    public ResponseEntity<List<CardapioSelecionado>> listar() {
        try {
            List<CardapioSelecionado> cardapioSelecionadoList = cardapioSelecionadoUseCases.GetAllSelecionados();
            if (cardapioSelecionadoList.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
            }
            return ResponseEntity.ok(cardapioSelecionadoList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/qtd-total")
    public ResponseEntity<?> calcularQtdTotal() {
        try {
            Map<String, Map<String, Double>> QtdTotal = cardapioSelecionadoUseCases.calcularQuantidadeTotal();
            return ResponseEntity.ok(QtdTotal);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }

    }

    @PostMapping()
    public ResponseEntity<?> criarCardapioSelecionado(@RequestBody CardapioSelecionado cardapioSelecionado) {
        try {
            CardapioSelecionado resultado = cardapioSelecionadoUseCases.AddItemSelecionado(cardapioSelecionado);
            return ResponseEntity.status(HttpStatus.CREATED).body(cardapioSelecionado);
        } catch (DataIntegrityViolationException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", "Id do cardapio não foi encontrado.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }


    @DeleteMapping
    public ResponseEntity<String> deleteALl() {
        try {
            cardapioSelecionadoUseCases.deleteAllCardapios();
            return ResponseEntity.ok("Todas os itens selecionados do cardapio foram deletados com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao tentar deletar as avaliações");
        }
    }
}
