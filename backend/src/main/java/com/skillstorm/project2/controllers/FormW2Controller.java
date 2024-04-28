package com.skillstorm.project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.project2.models.FormW2;
import com.skillstorm.project2.repositories.FormW2Repository;
import com.skillstorm.project2.service.FormW2Service;

@RestController
@RequestMapping("/w2")
public class FormW2Controller {

    // This controller will not need a post method because a new FormW2 entry is created whenever a new Account is made
    
    @Autowired
    FormW2Repository formW2Repo;

    @Autowired
    FormW2Service formW2Service;
    
    @GetMapping
    public ResponseEntity<List<FormW2>> findAllFormW2s() {
        return new ResponseEntity<>(formW2Repo.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FormW2> findFormW2ById(@PathVariable int id) {

        FormW2 foundForm = formW2Service.findFormById(id);
        return new ResponseEntity<>(foundForm, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<FormW2> updateFormW2(@RequestBody FormW2 form) {

        FormW2 updatedForm = formW2Service.updateForm(form);
        return new ResponseEntity<>(updatedForm, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteW2Form(@PathVariable int id) {

        formW2Service.deleteForm(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
