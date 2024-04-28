package com.skillstorm.project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.project2.exceptions.ResourceNotFoundException;
import com.skillstorm.project2.models.Account;
import com.skillstorm.project2.repositories.AccountRepository;
import com.skillstorm.project2.service.AccountService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class AccountController {
    
    @Autowired
    AccountService acctService;

    @Autowired
    AccountRepository acctRepo;

    @GetMapping
    public ResponseEntity<List<Account>> findAllAccounts() {
        return new ResponseEntity<>(acctRepo.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Account> findAccountById(@PathVariable int id) {

        Account acct = acctService.findAccountById(id);
        return new ResponseEntity<>(acct, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<Account> createAccount(@RequestBody Account acct) {

        Account newAcct = acctService.saveAccount(acct);
        return new ResponseEntity<>(newAcct, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Account> updateAccount(@RequestBody Account acct) throws ResourceNotFoundException {

        Account updatedAcct = acctService.updateAccount(acct);
        return new ResponseEntity<>(updatedAcct, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccount(@PathVariable int id) {

        acctService.deleteAccount(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
