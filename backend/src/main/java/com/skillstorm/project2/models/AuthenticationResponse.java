package com.skillstorm.project2.models;

import java.io.Serializable;

public class AuthenticationResponse implements Serializable {
    
    public static final long serailVersionUID = 1L;

    private String jwt;

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }

    public static long getSerailversionuid() {
        return serailVersionUID;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }


}
