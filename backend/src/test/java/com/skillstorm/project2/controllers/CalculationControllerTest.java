package com.skillstorm.project2.controllers;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.skillstorm.project2.mappers.AccountMapper;
import com.skillstorm.project2.models.Account;
import com.skillstorm.project2.models.Account.FilingStatus;
import com.skillstorm.project2.models.Account.Role;
import com.skillstorm.project2.models.Form1099;
import com.skillstorm.project2.models.FormW2;
import com.skillstorm.project2.models.TaxResults;
import com.skillstorm.project2.services.AccountService;

@ExtendWith(MockitoExtension.class)
public class CalculationControllerTest {

    @Mock
    AccountService acctService;

    @InjectMocks
    CalculationController calcController;

    AccountMapper mapper = new AccountMapper();
    
    private Account mockAcct = new Account(null, Role.ROLE_USER, "J@gmail.com", "pw123", "John", "Doe", FilingStatus.SINGLE, "111111111", "60 Rose Circuit", "Atlanta", "GA", "30126", LocalDate.parse("1999-01-01"), new FormW2(1, 50000, 5000, ""), new Form1099(1, 35000, 10000));

    @Test
    public void testCalculateTaxes() {

        Mockito.when(acctService.findAccountById(1)).thenReturn(mapper.toDto(mockAcct));

        ResponseEntity<?> response = calcController.calculateTaxes(1);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertTrue(response.getBody().getClass().equals(new TaxResults().getClass()));
    }
}
