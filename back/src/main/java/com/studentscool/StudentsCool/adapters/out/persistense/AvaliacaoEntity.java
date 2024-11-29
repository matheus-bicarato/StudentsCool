package com.studentscool.StudentsCool.adapters.out.persistense;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Data
@Entity
@Table(name = "avaliacoes")
public class AvaliacaoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String usuario_id;
    private int estrelaManha;
    private int estrelaAlmoco;
    private int estrelaTarde;

    @Column(name = "data_avaliacao", updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataAvaliacao;

    @PrePersist
    protected void onCreate() {
        dataAvaliacao = new Date();
    }
}
