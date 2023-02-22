package com.sg.bankApp.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
public class Transactions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int TransactionID;

    @JoinColumn
    @ManyToOne
    private int UserID;

    @JoinColumn
    @ManyToOne
    private int AccountTypeID;

    @Column(nullable = false)
    private BigDecimal Deposit;

    @Column(nullable = false)
    private BigDecimal Withdraw;

    @Column(nullable = false)
    private BigDecimal TransferToChequing;

    @Column(nullable = false)
    private BigDecimal TransferToSaving;

    public int getTransactionID() {
        return TransactionID;
    }

    public void setTransactionID(int transactionID) {
        TransactionID = transactionID;
    }

    public int getUserID() {
        return UserID;
    }

    public void setUserID(int userID) {
        UserID = userID;
    }

    public int getAccountTypeID() {
        return AccountTypeID;
    }

    public void setAccountTypeID(int accountTypeID) {
        AccountTypeID = accountTypeID;
    }

    public BigDecimal getDeposit() {
        return Deposit;
    }

    public void setDeposit(BigDecimal deposit) {
        Deposit = deposit;
    }

    public BigDecimal getWithdraw() {
        return Withdraw;
    }

    public void setWithdraw(BigDecimal withdraw) {
        Withdraw = withdraw;
    }

    public BigDecimal getTransferToChequing() {
        return TransferToChequing;
    }

    public void setTransferToChequing(BigDecimal transferToChequing) {
        TransferToChequing = transferToChequing;
    }

    public BigDecimal getTransferToSaving() {
        return TransferToSaving;
    }

    public void setTransferToSaving(BigDecimal transferToSaving) {
        TransferToSaving = transferToSaving;
    }
}

