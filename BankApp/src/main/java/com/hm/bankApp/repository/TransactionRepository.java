package com.hm.bankApp.repository;

import com.hm.bankApp.entity.Account;
import com.hm.bankApp.entity.Transaction;
import com.hm.bankApp.entity.Account;
import com.hm.bankApp.entity.Transaction;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

    List<Transaction> findByFromaccount(Account account, Pageable pageable);
    List<Transaction> findByToaccount(Account account, Pageable pageable);

    @Query(value = "SELECT t.* FROM transactions as t INNER JOIN accounts " +
    " on t.fromaccount = accounts.id INNER JOIN user ON user.id = accounts.userId WHERE User.id = :userId",
    nativeQuery = true)
    List<Transaction> findByUserId(int userId);
}
