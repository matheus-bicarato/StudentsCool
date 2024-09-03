package com.studentscool.StudentsCool.adapters.in.web;


import com.studentscool.StudentsCool.application.domain.Contato;
import com.studentscool.StudentsCool.application.ports.in.ContatoUseCases;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/comentarios")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ContatoController {

    @Autowired
    private ContatoUseCases contatoUseCases;

    @PostMapping()
    public Contato criarContato(@RequestBody Contato contato) {
        Contato resultado = contatoUseCases.PostContato(contato);
        return resultado;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contato> getContatoById(@PathVariable Long id) {
        Contato contato = contatoUseCases.getComentarioById(id);
        return ResponseEntity.ok().body(contato);
    }

    @GetMapping()
    public List<Contato> listar() {
        return contatoUseCases.getAllComentarios();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteComentario(@PathVariable(value = "id") Long id) {
        try {
            // Busca todos os contatos
            List<Contato> todosContatos = contatoUseCases.getAllComentarios();

            // Verifica se o ID está presente na lista de contatos
            boolean idExiste = todosContatos.stream().anyMatch(contato -> contato.getId().equals(id));

            if (!idExiste) {
                // Retorna uma resposta 404 se o ID não for encontrado
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("message", "Contato com ID " + id + " não encontrado");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
            }

            // Se o ID existe, deleta o contato
            contatoUseCases.DeletarComentario(id);

            // Retorna uma resposta 200 após a deleção
            Map<String, String> response = new HashMap<>();
            response.put("message", "Contato com ID " + id + " foi deletado com sucesso");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Captura exceções gerais e retorna uma resposta 500
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Erro interno do servidor: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }




}
