package com.skillstorm.project2.exceptions;

public class ExistingAccountException extends RuntimeException {
    
    public ExistingAccountException() {
        super("An account with these credentials already exists");
    }
}
