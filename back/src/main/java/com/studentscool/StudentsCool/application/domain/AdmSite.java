package com.studentscool.StudentsCool.application.domain;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class AdmSite {
    private Long id;
    private String name;
    private String email;
    private String password;
}
