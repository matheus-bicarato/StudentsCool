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

    private String periodo;
    private String nome_comida;
    private Integer tamanho_porcao;
}
