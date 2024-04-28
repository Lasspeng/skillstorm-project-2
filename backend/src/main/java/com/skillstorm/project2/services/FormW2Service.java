package com.skillstorm.project2.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.project2.exceptions.ResourceNotFoundException;
import com.skillstorm.project2.models.FormW2;
import com.skillstorm.project2.repositories.FormW2Repository;

@Service
public class FormW2Service {
    
    @Autowired
    FormW2Repository formW2Repo;

    public FormW2 findFormById(int id) {

        Optional<FormW2> foundForm = formW2Repo.findById(id);

        if (foundForm.isEmpty()) {
            throw new ResourceNotFoundException("W2 Form", id);
        }

        return foundForm.get();
    }

    public FormW2 updateForm(FormW2 form) {
    
        Optional<FormW2> foundForm = formW2Repo.findById(form.getId());

        if (foundForm.isEmpty()) {
            throw new ResourceNotFoundException("W2 Form", form.getId());
        }

        return foundForm.get();
    }

    public void deleteForm(int id) {

        Optional<FormW2> foundForm = formW2Repo.findById(id);

        if (foundForm.isEmpty()) {
            throw new ResourceNotFoundException("W2 Form", id);
        }

        formW2Repo.deleteById(id);
    }
}
