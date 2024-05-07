package com.skillstorm.project2.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.skillstorm.project2.dtos.AccountDto;
import com.skillstorm.project2.exceptions.ExistingAccountException;
import com.skillstorm.project2.exceptions.ResourceNotFoundException;
import com.skillstorm.project2.mappers.AccountMapper;
import com.skillstorm.project2.models.Account;
import com.skillstorm.project2.models.Account.Role;
import com.skillstorm.project2.models.Form1099;
import com.skillstorm.project2.models.FormW2;
import com.skillstorm.project2.repositories.AccountRepository;
import com.skillstorm.project2.repositories.Form1099Repository;
import com.skillstorm.project2.repositories.FormW2Repository;

@Service
public class AccountService {
    
    @Autowired
    AccountRepository acctRepo;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    FormW2Repository formW2Repo;

    @Autowired
    Form1099Repository form1099Repo;

    @Autowired
    AccountMapper mapper;


    public List<AccountDto> findAllAccounts() {
        List<Account> li = acctRepo.findAll();
        List<AccountDto> dtos = li.stream().map(mapper::toDto).collect(Collectors.toList());

        return dtos;
    }

    public AccountDto findAccountById(int id) {

        Optional<Account> acct = acctRepo.findById(id);

        if (acct.isPresent()) {
            return mapper.toDto(acct.get());
        } else {
            throw new ResourceNotFoundException("Account", id);
        }
    }

    public AccountDto findByCredentials(Account acct) {

        Optional<Account> foundAcct = acctRepo.findByEmail(acct.getEmail());

        if (foundAcct.isEmpty()) {
            throw new ResourceNotFoundException("Account", 0);
        }

        return mapper.toDto(foundAcct.get());
    }

    public AccountDto saveAccount(Account acct) {

        acct.setPassword(encoder.encode(acct.getPassword()));

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
        acct.setDateOfBirth(LocalDate.parse("0001-01-01"));

        return mapper.toDto(acctRepo.save(acct));
    }

    public AccountDto saveAdminAccount(Account acct) {

        acct.setPassword(encoder.encode(acct.getPassword()));

        Optional<Account> foundAcct = acctRepo.findById(acct.getId());

        if (foundAcct.isPresent()) {
            throw new ExistingAccountException();
        }

        acct.setId(null);
        acct.setRole(Role.ROLE_ADMIN);
        acct.setDateOfBirth(LocalDate.parse("0001-01-01"));

        return mapper.toDto(acctRepo.save(acct));
    }

    public AccountDto updateAccount(Account acct) {

        Optional<Account> foundAcct = acctRepo.findById(acct.getId());

        if (foundAcct.isEmpty()) {
            throw new ResourceNotFoundException("Account", acct.getId());
        } 


        if (acct.getPassword() != foundAcct.get().getPassword()) {
            acct.setPassword(encoder.encode(acct.getPassword()));
        }
        return mapper.toDto(acctRepo.save(acct));
    }

    public void deleteAccount(int id) {

        Optional<Account> foundAcct = acctRepo.findById(id);

        if (foundAcct.isPresent()) {
            throw new ResourceNotFoundException("Account", id);
        }

        acctRepo.deleteById(id);
    }
}
