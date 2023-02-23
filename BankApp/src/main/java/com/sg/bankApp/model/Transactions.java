package com.sg.bankApp.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
public class Transactions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int TransactionID;

    @JoinColumn
    @ManyToOne
    private int FromAccountID;

    @JoinColumn
    @ManyToOne
    private int ToAccountID;

    @Column(nullable = false)
    private String Type;

    @Column(nullable = false)
    private BigDecimal Amount;

    @Column(nullable = false)
    private LocalDate TransactionDate;

    @Column(nullable = false)
    private String Description;

    public int getTransactionID() {
        return TransactionID;
    }

    public void setTransactionID(int transactionID) {
        TransactionID = transactionID;
    }

    public int getFromAccountID() {
        return FromAccountID;
    }

    public void setFromAccountID(int fromAccountID) {
        FromAccountID = fromAccountID;
    }

    public int getToAccountID() {
        return ToAccountID;
    }

    public void setToAccountID(int toAccountID) {
        ToAccountID = toAccountID;
    }

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        Type = type;
    }

    public BigDecimal getAmount() {
        return Amount;
    }

    public void setAmount(BigDecimal amount) {
        Amount = amount;
    }

    public LocalDate getTransactionDate() {
        return TransactionDate;
    }

    public void setTransactionDate(LocalDate transactionDate) {
        TransactionDate = transactionDate;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }
}

