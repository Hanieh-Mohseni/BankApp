package com.sg.bankApp.model;

import jakarta.persistence.*;

@Entity
public class Accounts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int AccountTypeID;

    @Column(nullable = false)
    private String AccountType;

    public int getAccountTypeID() {
        return AccountTypeID;
    }

    public void setAccountTypeID(int accountTypeID) {
        AccountTypeID = accountTypeID;
    }

    public String getAccountType() {
        return AccountType;
    }

    public void setAccountType(String accountType) {
        AccountType = accountType;
    }
}
