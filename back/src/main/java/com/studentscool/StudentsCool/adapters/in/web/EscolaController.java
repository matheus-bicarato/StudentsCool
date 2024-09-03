package com.studentscool.StudentsCool.adapters.in.web;

import com.studentscool.StudentsCool.application.domain.Escola;
import com.studentscool.StudentsCool.application.ports.in.EscolasUseCases;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/escolas")
@CrossOrigin(origins = "*", maxAge = 3600)
public class EscolaController {

    @Autowired
    private EscolasUseCases escolasUseCases;

    @PostMapping()
    public Escola criarEscola(@RequestBody Escola escola) {
        Escola resultado = escolasUseCases.PostEscola(escola);
        return resultado;
    }

    @GetMapping
    public List<Escola> listar() {
        return escolasUseCases.getAllEscolas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Escola> getEscolaById(@PathVariable Long id) {
        Escola escola = escolasUseCases.getEscolaById(id);
        return ResponseEntity.ok().body(escola);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Escola> atualizarEscola(@PathVariable(value = "id") Long id,
                                                  @RequestBody Escola escolaDetails) {
        Escola updateEscola = escolasUseCases.updateEscola(escolaDetails, id);
        return ResponseEntity.ok(updateEscola);
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteEscola(@PathVariable(value = "id") Long id) {
        escolasUseCases.deleteEscola(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deletado", Boolean.TRUE);
        return response;
    }
}
