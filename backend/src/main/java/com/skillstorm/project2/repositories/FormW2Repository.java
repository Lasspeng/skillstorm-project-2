package com.skillstorm.project2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.project2.models.FormW2;

@Repository
public interface FormW2Repository extends JpaRepository<FormW2, Integer> {
    
}
