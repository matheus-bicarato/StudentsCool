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

    @PostMapping()
    public ResponseEntity<?> criarContato(
            @RequestParam("arquivo") MultipartFile arquivo,
            @RequestParam("nome") String nome,
            @RequestParam("email") String email,
            @RequestParam("telefone") String telefone,
            @RequestParam("mensagem") String mensagem,
            @RequestParam("DuvidaOuAlimentacao") Boolean DuvidaOuAlimentacao) {

        try {
            if (arquivo.isEmpty()) {
                return ResponseEntity.badRequest().body("Nenhum arquivo enviado.");
            }

            // Verificar se o arquivo é uma imagem PNG ou JPEG
            String contentType = arquivo.getContentType();
            if (contentType == null || (!contentType.equals(MediaType.IMAGE_PNG_VALUE) && !contentType.equals(MediaType.IMAGE_JPEG_VALUE))) {
                return ResponseEntity.badRequest().body("Arquivo inválido. Envie uma imagem PNG ou JPEG.");
            }

            if (isInvalidField(email) ||
                    isInvalidField(mensagem) ||
                    isInvalidField(nome) ||
                    isInvalidField(telefone)) {
                return ResponseEntity.badRequest().body("Formulário com falta de informações necessárias.");
            }

            Contato contato = new Contato();
            contato.setNome(nome);
            contato.setEmail(email);
            contato.setTelefone(telefone);
            contato.setMensagem(mensagem);
            contato.setDuvidaOuAlimentacao(DuvidaOuAlimentacao);

            // Salvar o arquivo como um byte array
            contato.setArquivo(arquivo.getBytes());

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
