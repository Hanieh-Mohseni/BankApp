package com.sg.bankApp.repository;

import com.sg.bankApp.model.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepo extends JpaRepository<Accounts,Integer> {
    List<Accounts>findByAccount(Accounts account);
    }
