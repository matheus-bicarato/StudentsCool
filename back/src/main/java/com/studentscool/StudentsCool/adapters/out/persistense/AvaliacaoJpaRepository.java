package com.studentscool.StudentsCool.adapters.out.persistense;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AvaliacaoJpaRepository extends JpaRepository<AvaliacaoEntity, String> {
}
