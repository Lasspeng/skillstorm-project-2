package com.skillstorm.project2.exceptions;

public class InvalidCredentialsException extends RuntimeException {
    
    private static final long serialVersionUID = 1L;

    public InvalidCredentialsException() {
        super("An account with these credentials was not found");
    }
}
