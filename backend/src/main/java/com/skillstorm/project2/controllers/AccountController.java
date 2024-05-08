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

import com.skillstorm.project2.dtos.AccountDto;
import com.skillstorm.project2.exceptions.ResourceNotFoundException;
import com.skillstorm.project2.models.Account;
import com.skillstorm.project2.repositories.AccountRepository;
import com.skillstorm.project2.services.AccountService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
@Tag(name = "Account Controller Endpoints")
public class AccountController {
    
    @Autowired
    AccountService acctService;

    @Autowired
    AccountRepository acctRepo;

    @GetMapping
    @Operation(summary = "Retrieve all accounts")
    public ResponseEntity<List<AccountDto>> findAllAccounts() {
        List<AccountDto> dtos = acctService.findAllAccounts();
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Retrieve an account with a given id")
    public ResponseEntity<AccountDto> findAccountById(@PathVariable int id) {

        AccountDto acct = acctService.findAccountById(id);
        return new ResponseEntity<>(acct, HttpStatus.OK);
    }

    @PostMapping("/email")
    @Operation(summary = "Retrieve an account with a given email")
    public ResponseEntity<AccountDto> findAccountByEmail(@RequestBody Account acct) {

        AccountDto foundAcct = acctService.findByCredentials(acct);
        return new ResponseEntity<>(foundAcct, HttpStatus.OK);
    }

    @PostMapping("/register")
    @Operation(summary = "Create a new account with a user role")
    public ResponseEntity<AccountDto> createAccount(@RequestBody Account acct) {

        AccountDto newAcct = acctService.saveAccount(acct);
        return new ResponseEntity<>(newAcct, HttpStatus.CREATED);
    }

    // Have to add an endpoint to create a new admin account because of BCrypt. This endpoint will not be accessible by the front end
    @PostMapping("/register/admin")
    @Operation(summary = "Create a new account with an admin role")
    public ResponseEntity<AccountDto> createAdminAccount(@RequestBody Account acct) {

        AccountDto newAcct = acctService.saveAdminAccount(acct);
        return new ResponseEntity<>(newAcct, HttpStatus.CREATED);
    }

    @PutMapping
    @Operation(summary = "Update a given account")
    public ResponseEntity<AccountDto> updateAccount(@RequestBody Account acct) throws ResourceNotFoundException {

        AccountDto updatedAcct = acctService.updateAccount(acct);
        return new ResponseEntity<>(updatedAcct, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a given account")
    public ResponseEntity<Void> deleteAccount(@PathVariable int id) {

        acctService.deleteAccount(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
