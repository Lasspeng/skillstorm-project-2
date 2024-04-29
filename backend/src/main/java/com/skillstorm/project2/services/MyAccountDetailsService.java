package com.skillstorm.project2.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.skillstorm.project2.models.Account;
import com.skillstorm.project2.repositories.AccountRepository;

@Service
public class MyAccountDetailsService implements UserDetailsService {

    @Autowired
    AccountRepository repo;

    @Override
    public Account loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Account> acctFound = repo.findByEmail(email);

        if (acctFound.isEmpty()) {
            throw new UsernameNotFoundException(email);
        }
        return acctFound.get();
    }
    
}
