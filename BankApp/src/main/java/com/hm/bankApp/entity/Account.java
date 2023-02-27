package com.hm.bankApp.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.hm.bankApp.model.Status;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name = "account_seq", allocationSize = 1)
    private int ID;


    @ManyToOne
    @JoinColumn(name="userid", referencedColumnName = "id")
    private User user;

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private int number;
    @Column(nullable = false)
    private String type;
    @Column(nullable = false)
    private BigDecimal balance;
    @Column(nullable = false)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date opendate;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;


    @Override
    public String toString() {
        return "Account{" +
                "ID=" + ID +
                ", user=" + user +
                ", name='" + name + '\'' +
                ", number=" + number +
                ", type='" + type + '\'' +
                ", balance=" + balance +
                ", opendate=" + opendate +
                ", status=" + status +
                '}';
    }
}
