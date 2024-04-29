package com.skillstorm.project2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.project2.models.Form1099;

@Repository
public interface Form1099Repository extends JpaRepository<Form1099, Integer> {
    
}
