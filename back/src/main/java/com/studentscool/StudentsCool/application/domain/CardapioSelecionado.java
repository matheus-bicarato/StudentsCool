package com.studentscool.StudentsCool.application.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CardapioSelecionado {
    private Long id;

//    aqui adiciona aquele item que usa o @OneToMany no entity
//    penso que se preciso, talvez eu tenha que adiciona-lo aqui como tipo "Long"
//    private CardapioItem cadapioItem;

    private int porcoes_escolhidas;
}
