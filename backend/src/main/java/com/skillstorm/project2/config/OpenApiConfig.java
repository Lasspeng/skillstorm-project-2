package com.skillstorm.project2.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;


// Open API metadata


@OpenAPIDefinition(
    info = @Info(
        contact = @Contact(
            name = "Gavin Liburd and Kevin Conner"
        ),
        description = "Open API documentation for Project 2",
        title = "Project 2 Rest API Documentation"
    ),
    servers = @Server (
        description = "Local Dev Environment",
        url = "http://localhost:8080/"
    )
)

public class OpenApiConfig {
    
}
