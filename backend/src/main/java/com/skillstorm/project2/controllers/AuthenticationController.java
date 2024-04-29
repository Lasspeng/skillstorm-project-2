package com.skillstorm.project2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.project2.models.Account;
import com.skillstorm.project2.models.AuthenticationResponse;
import com.skillstorm.project2.services.JwtService;

@RestController
public class AuthenticationController {

    @Autowired
    AuthenticationManager authManager;
    
    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    JwtService jwtService;


    // Create token at this endpoint. Request requires Email and Password and Reponse sends back a token
    @PostMapping("/authenticate")
    public ResponseEntity<?> createToken(@RequestBody Account acct) throws Exception {
        
        try {

            authManager.authenticate(new UsernamePasswordAuthenticationToken(acct.getEmail(), acct.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrent username or password");
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(acct.getUsername());

        final String jwt = jwtService.generateTokens(userDetails);

        return ResponseEntity.status(201).body(new AuthenticationResponse(jwt));
    }
    
}
