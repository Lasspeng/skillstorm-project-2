package com.skillstorm.project2.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.project2.models.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {

    public Optional<Account> findByEmail(String email);
    
}
