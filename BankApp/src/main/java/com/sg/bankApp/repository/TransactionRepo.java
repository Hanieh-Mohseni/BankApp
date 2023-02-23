package com.sg.bankApp.repository;

import com.sg.bankApp.model.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepo extends JpaRepository<Transactions,Integer> {
    List<Transactions> findByTransaction(Transactions transaction);

}
