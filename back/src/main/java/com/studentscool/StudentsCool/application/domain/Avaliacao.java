package com.studentscool.StudentsCool.application.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Avaliacao {
    private Long id;
    private Long Usuario_Id;
    private int estrelaManha;
    private int estrelaAlmoco;
    private int estrelaTarde;
    private Date dataAvaliacao;

    private void validarEstrela(int estrela) {
        if (estrela < 0 || estrela > 5) {
            throw new IllegalArgumentException("Estrela deve ser entre 0 e 5.");
        }
    }

    public void setEstrelaManha(int estrela) {
        validarEstrela(estrela);
        this.estrelaManha = estrela;
    }

    public void setEstrelaAlmoco(int estrela) {
        validarEstrela(estrela);
        this.estrelaAlmoco = estrela;
    }

    public void setEstrelaTarde(int estrela) {
        validarEstrela(estrela);
        this.estrelaTarde = estrela;
    }
}
