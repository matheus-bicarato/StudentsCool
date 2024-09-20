package com.studentscool.StudentsCool.adapters.out.persistense;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Data
@Entity
@Table(name = "users_escola_exemplo")
public class UserEntity {
    @Id
    private String id;

//    @Column(nullable = false, unique = false)
    private String nome;

//    @Column(nullable = false, unique = true)
    private String email;

//    @Column(nullable = false, unique = true)
    private Long cpf;

//    @Column(nullable = false, unique = true)
    private Integer telefone;

    private String authority;
}
