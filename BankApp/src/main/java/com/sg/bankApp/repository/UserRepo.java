package com.sg.bankApp.repository;

import com.sg.bankApp.model.Transactions;
import com.sg.bankApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
    List<Transactions> findByUser(User user);

}

