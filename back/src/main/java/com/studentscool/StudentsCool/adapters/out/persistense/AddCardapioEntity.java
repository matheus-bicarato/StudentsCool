package com.studentscool.StudentsCool.adapters.out.persistense;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.repository.Query;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Data
@Entity
@Table(name = "cardapio_item")
public class AddCardapioEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "periodo", nullable = false)
    private String periodo;

    @Column(name = "nome_comida", nullable = false)
    private String nome_comida;

    @Column(name = "tamanho_porcao", nullable = false)
    private Integer tamanho_porcao;
}
