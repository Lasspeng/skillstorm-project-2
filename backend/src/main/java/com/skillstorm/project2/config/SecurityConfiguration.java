package com.skillstorm.project2.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.skillstorm.project2.services.MyAccountDetailsService;

@Configuration
public class SecurityConfiguration {

    @Autowired
    MyAccountDetailsService userDetailsService;

    @Autowired
    JwtRequestFilter jwtRequestFilter;

    @Bean
    protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests((authorizeHttpRequests) ->
                    
                authorizeHttpRequests

                // Auth and Calc Controller filters
                .requestMatchers(HttpMethod.POST, "/authenticate").permitAll()
                .requestMatchers(HttpMethod.GET, "calculate/**").hasAnyAuthority("ROLE_ADMIN", "ROLE_USER")
                
                //Account Controller filters
                .requestMatchers(HttpMethod.GET, "/users").hasAuthority("ROLE_ADMIN")
                .requestMatchers(HttpMethod.POST, "/users/register").permitAll()
                .requestMatchers(HttpMethod.POST, "/users/register/admin").permitAll()
                .requestMatchers(HttpMethod.PUT, "/users").hasAnyAuthority("ROLE_ADMIN", "ROLE_USER")
                .requestMatchers(HttpMethod.DELETE, "users/**").hasAuthority("ROLE_ADMIN")
                .requestMatchers(HttpMethod.GET, "/users/**").hasAnyAuthority("ROLE_ADMIN", "ROLE_USER")

                // Form 1099 Controller filters
                .requestMatchers(HttpMethod.GET, "/1099").hasAuthority("ROLE_ADMIN")
                .requestMatchers(HttpMethod.GET, "/1099/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN")
                .requestMatchers(HttpMethod.PUT, "/1099").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN")
                .requestMatchers(HttpMethod.DELETE, "/1099/**").hasAuthority("ROLE_ADMIN")

                // Form W2 Controller filters
                .requestMatchers(HttpMethod.GET, "/w2").hasAuthority("ROLE_ADMIN")
                .requestMatchers(HttpMethod.GET, "/w2/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN")
                .requestMatchers(HttpMethod.PUT, "/w2").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN")
                .requestMatchers(HttpMethod.DELETE, "/w2").hasAuthority("ROLE_ADMIN")

                .anyRequest().authenticated()
            )

            .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

        
            .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();

    }

    @Bean
    protected PasswordEncoder encoder() {
        return new BCryptPasswordEncoder(5);
    }

    // Load encoder and user details so that Spring Security can perform authentication
    @Bean
    protected DaoAuthenticationProvider authenticationProvicer() {

        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(encoder());

        return authProvider;
    }

    @Bean
    protected AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
}
