package com.skillstorm.project2.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.project2.exceptions.ResourceNotFoundException;
import com.skillstorm.project2.models.Form1099;
import com.skillstorm.project2.repositories.Form1099Repository;

@Service
public class Form1099Service {
    
    @Autowired
    Form1099Repository form1099Repo;

    public Form1099 findFormById(int id) {

        Optional<Form1099> foundForm = form1099Repo.findById(id);

        if (foundForm.isEmpty()) {
            throw new ResourceNotFoundException("Form 1099", id);
        }

        return foundForm.get();
    }

    public Form1099 updateForm(Form1099 form) {

        Optional<Form1099> foundForm = form1099Repo.findById(form.getId());

        if (foundForm.isEmpty()) {
            throw new ResourceNotFoundException("Form 1099", form.getId());
        }

        return foundForm.get();
    }

    public void deleteForm(int id) {

        Optional<Form1099> foundForm = form1099Repo.findById(id);

        if (foundForm.isEmpty()) {
            throw new ResourceNotFoundException("Form 1099", id);
        }
    }
}
