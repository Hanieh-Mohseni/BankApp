package com.sg.bankApp.repository;

import com.sg.bankApp.entity.Account;
import com.sg.bankApp.entity.Transaction;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction,Integer> {
    List<Transaction> findByFromaccount(Account account, Pageable pageable);
}
