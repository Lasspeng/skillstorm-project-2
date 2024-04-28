package com.skillstorm.project2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.project2.repositories.FormW2Repository;

@Service
public class FormW2Service {
    
    @Autowired
    FormW2Repository formW2Repo;

    
}
