package com.skillstorm.project2.exceptions;

public class ExistingAccountException extends Exception {
    
    public ExistingAccountException() {
        super("An account with these credentials already exists");
    }
}
