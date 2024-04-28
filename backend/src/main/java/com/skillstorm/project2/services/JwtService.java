package com.skillstorm.project2.services;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

    // Used with algorithm to hash our token
    private final String SECRET_KEY = "skillstorm";

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {

        return extractClaim(token, Claims::getExpiration);
    }


    // takes a token and a claims resolver to find out what the claims are for that particular token
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {

        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Returns the generated token/tokens after a successful authentication
    public String generateTokens(UserDetails userDetails) {

        Map<String, Object> claims = new HashMap<>();
        
        return createToken(claims, userDetails.getUsername());
    }
    
    public String createToken(Map<String, Object> claims, String subject) {

        // Creates a new token and sets the expiration date for the token to 10 hours
        return Jwts.builder().setClaims(claims).setSubject(subject)
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
        .signWith(getSignInKey(), SignatureAlgorithm.HS256)
        .compact();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    // Validates token and checks if the current token is for the right user requesting it and that the token is not expired
    public boolean validateToken(String token, UserDetails userDetails) {

        final String username = extractUsername(token); 

        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
