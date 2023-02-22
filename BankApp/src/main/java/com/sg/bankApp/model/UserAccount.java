package com.sg.bankApp.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
public class UserAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int UserID;
    @JoinColumn
    @ManyToMany
    private int TransactionID;
    @JoinColumn
    @OneToMany
    private int AccountTypeID;
    @Column
    private Integer AccountNumber;
    @Column(nullable = false)
    private BigDecimal Balance;
    @Column(nullable = false)
    private Boolean Status;

    public int getUserID() {
        return UserID;
    }

    public void setUserID(int userID) {
        UserID = userID;
    }

    public int getTransactionID() {
        return TransactionID;
    }

    public void setTransactionID(int transactionID) {
        TransactionID = transactionID;
    }

    public int getAccountTypeID() {
        return AccountTypeID;
    }

    public void setAccountTypeID(int accountTypeID) {
        AccountTypeID = accountTypeID;
    }

    public Integer getAccountNumber() {
        return AccountNumber;
    }

    public void setAccountNumber(Integer accountNumber) {
        AccountNumber = accountNumber;
    }

    public BigDecimal getBalance() {
        return Balance;
    }

    public void setBalance(BigDecimal balance) {
        Balance = balance;
    }

    public Boolean getStatus() {
        return Status;
    }

    public void setStatus(Boolean status) {
        Status = status;
    }
}
