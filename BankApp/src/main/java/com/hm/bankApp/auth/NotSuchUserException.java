package com.hm.bankApp.auth;

public class NotSuchUserException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public NotSuchUserException() {
        super("The login name or password maybe wrong!");
    }
}