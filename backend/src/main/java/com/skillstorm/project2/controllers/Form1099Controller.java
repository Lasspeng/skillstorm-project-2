package com.skillstorm.project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.project2.models.Form1099;
import com.skillstorm.project2.repositories.Form1099Repository;
import com.skillstorm.project2.services.Form1099Service;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/1099")
@CrossOrigin("*")
@Tag(name = "1099 Form Controller Endpoints")
public class Form1099Controller {

    // This class will not need a post method because a new Form1099 entry will be created whenever a new Account is created
    @Autowired
    Form1099Repository form1099Repo;

    @Autowired
    Form1099Service form1099Service;
    
    @GetMapping
    @Operation(summary = "Retrieve all 1099 Forms")
    public ResponseEntity<List<Form1099>> findAllForm1099s() {
        return new ResponseEntity<>(form1099Repo.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Retrieve a 1099 Form with a given id")
    public ResponseEntity<Form1099> findForm1099ById(@PathVariable int id) {

        Form1099 form = form1099Service.findFormById(id);
        return new ResponseEntity<>(form, HttpStatus.OK);
    }

    @PutMapping
    @Operation(summary = "Update a 1099 Form")
    public ResponseEntity<Form1099> updateForm1099(@RequestBody Form1099 form) {

        Form1099 updatedForm = form1099Service.updateForm(form);
        return new ResponseEntity<>(updatedForm, HttpStatus.OK);
    }

    @DeleteMapping
    @Operation(summary = "Delete a 1099 Form")
    public ResponseEntity<Form1099> deleteForm1099(@PathVariable int id) {

        form1099Service.deleteForm(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
