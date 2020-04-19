package org.launchcode.restfullwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
	
	// contains username and password
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    //  basil, dummy
//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYXNpbCIsImV4cCI6MTU4NDU2NzA4MywiaWF0IjoxNTgzOTYyMjgzfQ.Ew3lT76Tll8UW2Akr-QdzmYW6Y34QUkz1cBsJwv0P8iA7sQfeNRmMAiWLnSnrZVs43UtGWXp7mDORjE0Qu-twA"
//    }

  
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}