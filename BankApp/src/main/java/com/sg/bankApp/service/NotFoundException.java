package com.sg.bankApp.service;

public class NotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    NotFoundException(Long id) {
        super("Could not find record, id: " + id);
    }
}