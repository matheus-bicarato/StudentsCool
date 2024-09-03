package com.studentscool.StudentsCool.adapters.out.persistense;

import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Data
@Entity
@Table(name = "cadastro_escolas")
public class EscolaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String localizacao;
    private String contato_alt;
    private String lvl_ensino;
    private Integer qtd_turma;
    private String pre_cores;
    private String dias_letivos;
    private String horarios;
    private String metodo_nota;
    private String observacoes;
    private Boolean aprovado;
}
