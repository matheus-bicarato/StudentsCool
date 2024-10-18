package com.studentscool.StudentsCool.adapters.out.persistense;


import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Data
@Entity
@Table(name = "contato")
public class ContatoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String telefone;
    private String mensagem;
    private Boolean DuvidaOuAlimentacao;

    @Column(length = Integer.MAX_VALUE)
    private String arquivo;
}
