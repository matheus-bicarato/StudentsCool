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
    private Long alimentoId;
    private int estrela;
    private String periodo;
    private String diaSemana;
    private Date dataAvaliacao;

    public void setEstrela(int estrela) {
        if (estrela < 0 || estrela > 5) {
            throw new IllegalArgumentException("Estrela deve ser entre 0 e 5.");
        }
        this.estrela = estrela;
    }

//    @Override
//    public String toString() {
 //       return "Avaliacoes{" +
//                "id=" + id +
//                ", alimentoId=" + alimentoId +
//                ", estrela=" + estrela +
//                ", periodo='" + periodo + '\'' +
//               ", diaSemana='" + diaSemana + '\'' +
 //               ", dataAvaliacao=" + dataAvaliacao +
 //               '}';
  //  }

}
