package com.skillstorm.project2.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.project2.exceptions.ExistingAccountException;
import com.skillstorm.project2.exceptions.ResourceNotFoundException;
import com.skillstorm.project2.models.Account;
import com.skillstorm.project2.models.Form1099;
import com.skillstorm.project2.models.Account.Role;
import com.skillstorm.project2.models.FormW2;
import com.skillstorm.project2.repositories.AccountRepository;
import com.skillstorm.project2.repositories.Form1099Repository;
import com.skillstorm.project2.repositories.FormW2Repository;

@Service
public class AccountService {
    
    @Autowired
    AccountRepository acctRepo;

    @Autowired
    FormW2Repository formW2Repo;

    @Autowired
    Form1099Repository form1099Repo;


    public Account findAccountById(int id) {

        Optional<Account> acct = acctRepo.findById(id);

        if (acct.isPresent()) {
            return acct.get();
        } else {
            throw new ResourceNotFoundException("Account", id);
        }
    }

    public Account saveAccount(Account acct) {

        // If account already exists then throw exception
        Optional<Account> foundAcct = acctRepo.findByEmail(acct.getEmail());

        if (foundAcct.isPresent()) {
            throw new ExistingAccountException();
        }

        // Creating new entries in the W2 and 1099 tables so that the w2 and 1099 IDs can be saved in the Account table as a foreign key
        FormW2 newFormW2 = formW2Repo.save(new FormW2());
        Form1099 newForm1099 = form1099Repo.save(new Form1099());
        acct.setFormW2(newFormW2);
        acct.setForm1099(newForm1099);

        acct.setId(null);
        acct.setRole(Role.ROLE_USER);

        return acctRepo.save(acct);
    }

    public Account saveAdminAccount(Account acct) {

        Optional<Account> foundAcct = acctRepo.findById(acct.getId());

        if (foundAcct.isPresent()) {
            throw new ExistingAccountException();
        }

        acct.setId(null);
        acct.setRole(Role.ROLE_ADMIN);

        return acctRepo.save(acct);
    }

    public Account updateAccount(Account acct) {

        Optional<Account> foundAcct = acctRepo.findByEmail(acct.getEmail());

        if (foundAcct.isEmpty()) {
            throw new ResourceNotFoundException("Account", acct.getId());
        } 

        return acctRepo.save(acct);
    }

    public void deleteAccount(int id) {

        Optional<Account> foundAcct = acctRepo.findById(id);

        if (foundAcct.isPresent()) {
            throw new ResourceNotFoundException("Account", id);
        }

        acctRepo.deleteById(id);
    }
}
