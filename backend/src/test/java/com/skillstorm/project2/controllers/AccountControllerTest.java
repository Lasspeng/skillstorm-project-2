package com.skillstorm.project2.controllers;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;

import java.time.LocalDate;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.skillstorm.project2.dtos.AccountDto;
import com.skillstorm.project2.exceptions.ExistingAccountException;
import com.skillstorm.project2.exceptions.ResourceNotFoundException;
import com.skillstorm.project2.mappers.AccountMapper;
import com.skillstorm.project2.models.Account;
import com.skillstorm.project2.models.Account.FilingStatus;
import com.skillstorm.project2.models.Account.Role;
import com.skillstorm.project2.models.Form1099;
import com.skillstorm.project2.models.FormW2;
import com.skillstorm.project2.services.AccountService;

@ExtendWith(MockitoExtension.class)
public class AccountControllerTest {

    @Mock
    private AccountService acctService;

    @InjectMocks
    private AccountController acctController;

    AccountMapper mapper = new AccountMapper();

    private AccountDto mockAcct = new AccountDto(1, "John", "Doe");
    private AccountDto mockAcct2 = new AccountDto(2, "Jane", "Doe");
    private Account mockAcct3 = new Account(null, Role.ROLE_USER, "J@gmail.com", "pw123", "John", "Doe", FilingStatus.SINGLE, "111111111", "60 Rose Circuit", "Atlanta", "GA", "30126", LocalDate.parse("1999-01-01"), new FormW2(), new Form1099());

    @Test
    public void testFindAllAccounts() {

        given(acctService.findAllAccounts()).willReturn(List.of(mockAcct, mockAcct2));

        ResponseEntity<List<AccountDto>> response = acctController.findAllAccounts();

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody().size()).isEqualTo(2);
    }

    @Test
    public void testFindAccountById() {

        given(acctService.findAccountById(1)).willReturn(mockAcct);

        ResponseEntity<AccountDto> response = acctController.findAccountById(1);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isEqualTo(mockAcct);


        Mockito.when(acctService.findAccountById(4)).thenThrow(ResourceNotFoundException.class);

        assertThrows(ResourceNotFoundException.class, () -> acctController.findAccountById(4));
    }
    
    @Test
    public void testFindAccountByEmail() {

        given(acctService.findByCredentials(mapper.toAccount(mockAcct))).willReturn(mockAcct);

        ResponseEntity<AccountDto> response = acctController.findAccountByEmail(mapper.toAccount(mockAcct));

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isEqualTo(mockAcct);


        Mockito.when(acctService.findByCredentials(mockAcct3)).thenThrow(ResourceNotFoundException.class);

        assertThrows(ResourceNotFoundException.class, () -> acctController.findAccountByEmail(mockAcct3));
    }

    @Test
    public void testCreateAccount() {

        given(acctService.saveAccount(mockAcct3)).willReturn(mapper.toDto(mockAcct3));

        ResponseEntity<AccountDto> response = acctController.createAccount(mockAcct3);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody()).isEqualTo(mapper.toDto(mockAcct3));


        Mockito.when(acctService.saveAccount(mockAcct3)).thenThrow(ExistingAccountException.class);

        assertThrows(ExistingAccountException.class, () -> acctController.createAccount(mockAcct3));
    }
    
    @Test
    public void testCreateAdminAccount() {

        given(acctService.saveAdminAccount(mockAcct3)).willReturn(mapper.toDto(mockAcct3));

        ResponseEntity<AccountDto> response = acctController.createAdminAccount(mockAcct3);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody()).isEqualTo(mapper.toDto(mockAcct3));


        Mockito.when(acctService.saveAdminAccount(mockAcct3)).thenThrow(ExistingAccountException.class);

        assertThrows(ExistingAccountException.class, () -> acctController.createAdminAccount(mockAcct3));
    }

    @Test
    public void testUpdateAccount() {

        given(acctService.updateAccount(mockAcct3)).willReturn(mapper.toDto(mockAcct3));

        ResponseEntity<AccountDto> response = acctController.updateAccount(mockAcct3);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).isEqualTo(mapper.toDto(mockAcct3));


        Mockito.when(acctService.updateAccount(mockAcct3)).thenThrow(ResourceNotFoundException.class);

        assertThrows(ResourceNotFoundException.class, () -> acctController.updateAccount(mockAcct3));
    }

    @Test
    public void testDeleteAccount() {

        Mockito.doNothing().when(acctService).deleteAccount(3);

        ResponseEntity<Void> response = acctController.deleteAccount(3);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);


        Mockito.doThrow(ResourceNotFoundException.class).when(acctService).deleteAccount(3);

        assertThrows(ResourceNotFoundException.class, () -> acctController.deleteAccount(3));
    }
}
