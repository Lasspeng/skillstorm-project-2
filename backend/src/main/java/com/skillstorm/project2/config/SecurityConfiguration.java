package com.skillstorm.project2.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        
        http
            .authorizeHttpRequests((authorizeHttpRequests) -> {
                    
                authorizeHttpRequests
                    .requestMatchers(HttpMethod.GET, "/users").permitAll()
                    .requestMatchers(HttpMethod.POST, "/users/register").permitAll()
                    .anyRequest().authenticated();
            });

        
        return http.build();

    }
}
