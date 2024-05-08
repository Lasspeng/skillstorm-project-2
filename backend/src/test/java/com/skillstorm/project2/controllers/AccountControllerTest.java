// package com.skillstorm.project2.controllers;

// import static org.assertj.core.api.Assertions.assertThat;
// import static org.mockito.BDDMockito.given;

// import java.util.List;

// import org.junit.jupiter.api.Test;
// import org.junit.jupiter.api.extension.ExtendWith;
// import org.mockito.InjectMocks;
// import org.mockito.Mock;
// import org.mockito.junit.jupiter.MockitoExtension;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;

// import com.skillstorm.project2.dtos.AccountDto;
// import com.skillstorm.project2.services.AccountService;

// @ExtendWith(MockitoExtension.class)
// public class AccountControllerTest {

//     @Mock
//     private AccountService acctService;

//     @InjectMocks
//     private AccountController acctController;

//     private AccountDto mockAcct = new AccountDto(1, "John", "Doe");
//     private AccountDto mockAcct2 = new AccountDto(2, "Jane", "Doe");

//     @Test
//     public void testFindAllAccounts() {

//         given(acctService.findAllAccounts()).willReturn(List.of(mockAcct, mockAcct2));

//         ResponseEntity<List<AccountDto>> response = acctController.findAllAccounts();

//         assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
//         assertThat(response.getBody().size()).isEqualTo(2);
//     }

    
    
// }
