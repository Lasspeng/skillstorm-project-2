package com.skillstorm.project2.exceptions;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    // This class will automatically run the below methods when the corresponding exception is thrown. The method will then return the appropriate Http response
    
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> resourceNotFoundException (ResourceNotFoundException ex) {

        return ResponseEntity.status(404).body(ex.getMessage());
    }

    @ExceptionHandler(InvalidCredentialsException.class)
    public ResponseEntity<?> invalidCredentialsException(InvalidCredentialsException ex) {

        return ResponseEntity.status(400).body(ex.getMessage());
    }

    @ExceptionHandler(ExistingAccountException.class)
    public ResponseEntity<?> existingAccountException(ExistingAccountException ex) {

        return ResponseEntity.status(400).body(ex.getMessage());
    }
}
