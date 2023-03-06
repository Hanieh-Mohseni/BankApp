package com.hm.bankApp.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.hm.bankApp.entity.Account;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

import static jakarta.persistence.FetchType.EAGER;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionModel {

    private Integer id;
    private TransType type;
    private BigDecimal amount;
    private Date transactiondate;
    private String description;
    private Integer fromaccount;
    private Integer toaccount;

    @Override
    public String toString() {
        return "TransactionModel{" +
                "id=" + id +
                ", type=" + type +
                ", amount=" + amount +
                ", transactiondate=" + transactiondate +
                ", description='" + description + '\'' +
                ", fromaccount=" + fromaccount +
                ", toaccount=" + toaccount +
                '}';
    }
}
