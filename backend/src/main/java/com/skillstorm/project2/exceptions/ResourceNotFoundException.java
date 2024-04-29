package com.skillstorm.project2.exceptions;

public class ResourceNotFoundException extends RuntimeException {
    
    private static final long serialVersionUID = 1L;
	
	public ResourceNotFoundException(String resource, int id) {
		super(resource + " was not found");
	}
}
