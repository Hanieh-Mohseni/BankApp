package com.hm.bankApp.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.hm.bankApp.model.TransType;
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
@Entity
@Table(name="transactions")
public class Transaction{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "account_seq")
    @SequenceGenerator(name = "account_seq", allocationSize = 1)
    private Integer id;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TransType type;
    @Column(nullable = false)
    private BigDecimal amount;
    @Column(nullable = false)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date transactiondate;
    @Column(nullable = false)
    private String description;

    @ManyToOne(fetch = EAGER)
    @JoinColumn(name="fromaccount", referencedColumnName = "id", nullable = true)
    private Account fromaccount;
    @ManyToOne(fetch = EAGER)
    @JoinColumn(name="toaccount", referencedColumnName = "id", nullable = true)
    private Account toaccount;

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", amount=" + amount +
                ", transactiondate=" + transactiondate +
                ", description='" + description + '\'' +
                '}';
    }
}




