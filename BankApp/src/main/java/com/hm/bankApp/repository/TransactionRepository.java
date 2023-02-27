package com.hm.bankApp.repository;

import com.hm.bankApp.entity.Account;
import com.hm.bankApp.entity.Transaction;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction,Integer> {
    List<Transaction> findByFromaccount(Account account, Pageable pageable);
}
