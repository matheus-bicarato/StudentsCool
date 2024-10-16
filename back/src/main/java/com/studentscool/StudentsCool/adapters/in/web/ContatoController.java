package com.studentscool.StudentsCool.adapters.in.web;

import com.studentscool.StudentsCool.application.domain.Contato;
import com.studentscool.StudentsCool.application.ports.in.ContatoUseCases;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/contato")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ContatoController {

    @Autowired
    private ContatoUseCases contatoUseCases;

    public boolean isInvalidField(String field) {
        return field == null || field.trim().isEmpty() || field.equals("null");
    }

    private boolean isTelefoneValido(String telefone) {
        return telefone != null && telefone.matches("\\d+");
    }

    @PostMapping
    public ResponseEntity<?> criarContato(
            @RequestParam(value = "imagemBase64", required = false) String imagemBase64,
            @RequestParam("nome") String nome,
            @RequestParam("email") String email,
            @RequestParam("telefone") String telefone,
            @RequestParam("mensagem") String mensagem,
            @RequestParam("DuvidaOuAlimentacao") Boolean DuvidaOuAlimentacao) {

        try {
            if (!isTelefoneValido(telefone)) {
                return ResponseEntity.badRequest().body("O telefone deve conter apenas números.");
            }

            // Cria o objeto Contato
            Contato contato = new Contato();
            contato.setNome(nome);
            contato.setEmail(email);
            contato.setTelefone(telefone);
            contato.setMensagem(mensagem);
            contato.setDuvidaOuAlimentacao(DuvidaOuAlimentacao);

            // Verifica a lógica da DuvidaOuAlimentacao
            if (DuvidaOuAlimentacao) {
                if (imagemBase64 != null && !imagemBase64.isEmpty()) {
                    // Armazena a imagem como string Base64
                    contato.setArquivo(imagemBase64);
                } else {
                    contato.setArquivo(null); // Pode ser null se não houver arquivo
                }
            } else {
                contato.setArquivo(null); // Não permite arquivos se DuvidaOuAlimentacao for false
            }

            // Valida os campos obrigatórios
            if (isInvalidField(email) ||
                    isInvalidField(mensagem) ||
                    isInvalidField(nome) ||
                    isInvalidField(telefone)) {
                return ResponseEntity.badRequest().body("Formulário com falta de informações necessárias.");
            }

            Contato resultado = contatoUseCases.PostContato(contato);
            return ResponseEntity.ok(resultado);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Erro de requisição: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro inesperado: " + e.getMessage());
        }
    }



    @GetMapping("/{id}")
    public ResponseEntity<?> getContatoById(@PathVariable(value = "id") Long id) {
        try {
            Contato contato = contatoUseCases.getComentarioById(id);
            return ResponseEntity.status(HttpStatus.OK).body(contato);
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

    @GetMapping()
    public ResponseEntity<?> listar() {
        List<Contato> contatos = contatoUseCases.getAllComentarios();

        if (contatos.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        } else {
            return ResponseEntity.ok(contatos);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteComentario(@PathVariable(value = "id") Long id) {
        try {
            List<Contato> todosContatos = contatoUseCases.getAllComentarios();

            boolean idExiste = todosContatos.stream().anyMatch(contato -> contato.getId().equals(id));

            if (!idExiste) {
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("message", "Contato com ID " + id + " não foi encontrado");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
            }

            contatoUseCases.DeletarComentario(id);

            Map<String, String> response = new HashMap<>();
            response.put("message", "Contato com ID " + id + " foi deletado com sucesso");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Erro interno do servidor: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
}
