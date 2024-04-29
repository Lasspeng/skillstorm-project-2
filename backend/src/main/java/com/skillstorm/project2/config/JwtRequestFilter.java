package com.skillstorm.project2.config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.skillstorm.project2.services.JwtService;
import com.skillstorm.project2.services.MyAccountDetailsService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


// This class is what will handle the processing of the token when a request is received with the token in the header
@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    
    @Autowired
    private MyAccountDetailsService accountDetailsService;

    @Autowired
    private JwtService jwtService;


    // The method that checks the request header and validates the token
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException{

        final String authorizationHeader = request.getHeader("Authorization");

        String jwt = null;
        String username = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
            username = jwtService.extractUsername(jwt);
        }

        // Takes the details of the user/account that is authenticated and loads that user's details into the security context if that user is not already in the security context
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            UserDetails userDetails = accountDetailsService.loadUserByUsername(username);

            if (jwtService.validateToken(jwt, userDetails)) {

                UsernamePasswordAuthenticationToken uPAuthToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

                uPAuthToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(uPAuthToken);
            }
        }

        filterChain.doFilter(request, response);
    }
}
