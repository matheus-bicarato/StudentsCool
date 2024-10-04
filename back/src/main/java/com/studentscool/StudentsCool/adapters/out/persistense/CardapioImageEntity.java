package com.studentscool.StudentsCool.adapters.out.persistense;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Data
@Entity
@Table(name = "imagem_cardapio")
public class CardapioImageEntity {
    @Id
    private Long id;

    @Column(length = Integer.MAX_VALUE)
    private String imagem_cardapio;
}
