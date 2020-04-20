package org.launchcode.restfullwebservices.jwt.resource;

//whenever there is an exception for authentication 
public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}
