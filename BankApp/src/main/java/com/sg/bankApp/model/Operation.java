package com.sg.bankApp.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
public class Operation {
    private int accountId;
    private TransType action;
    private BigDecimal amount;

}