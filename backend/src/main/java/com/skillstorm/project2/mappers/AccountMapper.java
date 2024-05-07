package com.skillstorm.project2.mappers;

import org.springframework.stereotype.Component;

import com.skillstorm.project2.dtos.AccountDto;
import com.skillstorm.project2.models.Account;

@Component
public class AccountMapper {
    
    public Account toAccount(AccountDto dto) {
        return new Account(dto.getId(), dto.getRole(), dto.getEmail(), dto.getPassword(), dto.getFirstName(), dto.getLastName(), dto.getFilingStatus(), dto.getSocialSecurity(), dto.getStreetAddress(), dto.getCity(), dto.getState(), dto.getZipCode(), dto.getDateOfBirth(), dto.getFormW2(), dto.getForm1099());
    }
    
    public AccountDto toDto(Account acct) {
        return new AccountDto(acct.getId(), acct.getRole(), acct.getEmail(), acct.getPassword(), acct.getFirstName(), acct.getLastName(), acct.getFilingStatus(), acct.getSocialSecurity(), acct.getStreetAddress(), acct.getCity(), acct.getState(), acct.getZipCode(), acct.getDateOfBirth(), acct.getFormW2(), acct.getForm1099());
    }
}
