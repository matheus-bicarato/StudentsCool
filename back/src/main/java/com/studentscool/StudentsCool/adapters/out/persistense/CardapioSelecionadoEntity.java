package com.studentscool.StudentsCool.adapters.out.persistense;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Data
@Entity
@Table(name = "cadapio_selecionados")
public class CardapioSelecionadoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cardapio_id_item", nullable = false)
    private AddCardapioEntity addCardapio;

    @Column(name = "id_user", nullable = false)
    private String id_user;

    @Column(name = "porcoes_escolhidas", nullable = false)
    private Integer porcoes_escolhidas;
}
