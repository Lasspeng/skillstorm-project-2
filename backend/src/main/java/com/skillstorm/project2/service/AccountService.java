package com.skillstorm.project2.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.project2.exceptions.ExistingAccountException;
import com.skillstorm.project2.exceptions.ResourceNotFoundException;
import com.skillstorm.project2.models.Account;
import com.skillstorm.project2.models.Account.Role;
import com.skillstorm.project2.repositories.AccountRepository;

@Service
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

    public Account saveAccount(Account acct) throws ExistingAccountException {

        // If account already exists then throw exception
        Optional<Account> foundAcct = acctRepo.findByEmail(acct.getEmail());

        if (foundAcct.isEmpty()) {
            throw new ExistingAccountException();
        }

        acct.setId(null);
        acct.setRole(Role.ROLE_USER);
        return acctRepo.save(acct);
    }

    public Account updateAccount(Account acct) throws ResourceNotFoundException {

        Optional<Account> foundAcct = acctRepo.findByEmail(acct.getEmail());

        if (foundAcct.isEmpty()) {
            throw new ResourceNotFoundException("Account", acct.getId());
        } 

        return acctRepo.save(acct);
    }

    public void deleteAccount(int id) throws ResourceNotFoundException {

        Optional<Account> foundAcct = acctRepo.findById(id);

        if (foundAcct.isPresent()) {
            throw new ResourceNotFoundException("Account", id);
        }

        acctRepo.deleteById(id);
    }
}
