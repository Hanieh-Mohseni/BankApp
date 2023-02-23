package com.sg.bankApp.controller;

import ch.qos.logback.core.model.Model;
import com.sg.bankApp.model.User;
import com.sg.bankApp.repository.AccountRepo;
import com.sg.bankApp.repository.TransactionRepo;
import com.sg.bankApp.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

public class Controller {
    @Autowired
    UserRepo users;

    @Autowired
    AccountRepo accounts;

    @Autowired
    TransactionRepo transactions;


    @GetMapping(value="/")
    public String getPage() {
        
        return "SignUp";
    }

    @PostMapping("/addUser")
    public String addStore(User user) {
        users.save(user);
        return "redirect:/";
    }



}
