package com.skillstorm.project2.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.skillstorm.project2.exceptions.ResourceNotFoundException;
import com.skillstorm.project2.models.Account;
import com.skillstorm.project2.repositories.AccountRepository;

public class AccountService {
    
    @Autowired
    AccountRepository acctRepo;

    public Account findAccountById(int id) throws ResourceNotFoundException {

        Optional<Account> acct = acctRepo.findById(id);

        if (acct.isPresent()) {
            return acct.get();
        } else {
            throw new ResourceNotFoundException("Account", id);
        }
    }
}
